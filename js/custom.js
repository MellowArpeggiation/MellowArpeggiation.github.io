/*global $, requestAnimationFrame*/

function scrollSmoothTo(element) {
	'use strict';
	
	$('html body').animate({
		scrollTop: $(element).offset().top
	}, 1000);
}

var currentScrollTop = $("body").scrollTop(),
    oldScrollTop;
function setImgScroll() {
	'use strict';
	
	$(".img-wrapper img").each(function (e) {
        var imgOffsetTop = $(this).parent().offset().top,
            scrollHeightOfElement = ((currentScrollTop - imgOffsetTop) * 0.7) - ($(window).height() / 5) + (imgOffsetTop / 20);
        
        $(this).css("top", scrollHeightOfElement);
    });
}

function animLoop() {
	'use strict';
	
    if (currentScrollTop !== oldScrollTop) {
        setImgScroll();
        oldScrollTop = currentScrollTop;
    }
    requestAnimationFrame(animLoop);
}

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    $(".header").css("margin-top", -70);
}

$(window).scroll(function () {
	'use strict';
	
    currentScrollTop = $("body").scrollTop();
});

animLoop();