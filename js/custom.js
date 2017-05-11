/*global $, requestAnimationFrame*/

var currentScrollTop = $(window).scrollTop(),
    oldScrollTop,
    allImages = $(".img-wrapper img"),
    // We keep a reference to the length of the array to prevent extra array accesses
    allImagesLength = allImages.length,
    downArrow = $(".chevron-down"),
    scrollCoefficient = 2.2,
    scrollTime = 1000;

/** Record the image offset as a data attribute in the image **/
function getImageOffsets() {
    'use strict';

    allImages.each(function (e) {
        $(this).data("offsetTop", $(this).parent().offset().top);
    });
}

/** Set the image parallax scroll offset **/
function setImgScroll(currentScrollY) {
    'use strict';

    var i,
        imgOffsetTop,
        scrollHeightOfElement,
        windowHeightReduced = $(window).height() / 8;

    // Optimised array loop, forEach() is too slow for 60fps
    for (i = 0; i < allImagesLength; i += 1) {
        imgOffsetTop = $(allImages[i]).data("offsetTop");
        scrollHeightOfElement = (currentScrollY - imgOffsetTop) + (imgOffsetTop - currentScrollY) / scrollCoefficient;

        $(allImages[i]).css("transform", "translateY(" + scrollHeightOfElement + "px) translateZ(0)");
    }
}

/** Fade out the content arrow depending on where the user is on the page **/
function fadeDownArrow(currentScrollY) {
    'use strict';

    if (!downArrow.hasClass("animation-started")) {
        return;
    }

    var windowHeightReduced = $(window).height() / 3,
        newOpacity = (windowHeightReduced - currentScrollY) / windowHeightReduced;

    newOpacity = newOpacity < 0 ? 0 : newOpacity;

    downArrow.css("opacity", newOpacity);
}

/** Highly optimised animation loop, uses requestAnimationFrame for max performance **/
function animLoop() {
    'use strict';

    requestAnimationFrame(animLoop);
    if (currentScrollTop !== oldScrollTop) {
        setImgScroll(currentScrollTop);
        fadeDownArrow(currentScrollTop);
        oldScrollTop = currentScrollTop;
    }
}

function init() {
    'use strict';

    // Begin the animation loop
    requestAnimationFrame(animLoop);

    // Get image y offset from top of screen
    getImageOffsets();
    
    // Get all non empty hash links and attach scroll
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        console.log("click!");
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
                location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                // Prevent default browser behaviour
                event.preventDefault();
                location.hash = this.hash;
                // Scroll for scrollTime to the marker
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, scrollTime, function () {
                    // After animation finishes, set focus
                    // Reimplements default browser behaviour
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus(); // Re set the focus
                    }
                });
            }
        }
    });
}

/** Fix up the location of the content arrow on iOS Safari.
	Without this, the user would not get the indication to scroll!
**/
if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    $(".header").addClass("ios-safari-margin");
}

/** Change the page scroll location, this is checked by the animation loop.
	This prevents a draw call being made for every scroll event, which is expensive
**/
$(window).scroll(function () {
    'use strict';

    currentScrollTop = $(window).scrollTop();
});

$(window).resize(function () {
    'use strict';

    getImageOffsets();
});

/** Catch all the different browser implementations of animation end.
	Then unset the animation rule, to allow Opacity changes
**/
downArrow.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
    'use strict';

    $(this).css("animation", "initial");
});
downArrow.on("animationstart webkitAnimationStart oAnimationStart MSAnimationStart", function () {
    'use strict';

    $(this).addClass("animation-started");
    fadeDownArrow(currentScrollTop);
});

// Fix Chrome scroll jitter
window.addEventListener("mousewheel", function () {
    'use strict';
}, {
    passive: true
});

// Now we start the execution
// Since we tail load the JS, we don't have to wait for the page
init();