/*global $, requestAnimationFrame*/

var currentScrollTop = $(window).scrollTop(),
    oldScrollTop,
    allImages = $(".img-wrapper img"),
    // We keep a reference to the length of the array to prevent extra array accesses
    allImagesLength = allImages.length,
    downArrow = $(".chevron-down"),
    scrollCoefficient = 2.2;

/** Scroll to any defined element over one second **/
function scrollSmoothTo(element) {
    'use strict';

    $("html, body").animate({
        scrollTop: $(element).offset().top
    }, 1000);
}

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

    // Set image offsets
    getImageOffsets();
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
init();