/*global $, requestAnimationFrame*/

function scrollSmoothTo(element) {
	'use strict';
	
	$('html body').animate({
		scrollTop: $(element).offset().top
	}, 1000);
}

var currentScrollTop = $("body").scrollTop(),
    oldScrollTop,
	allImages = $(".img-wrapper img"),
	allImagesLength = allImages.length;

allImages.each(function (e) {
	'use strict';
	
	$(this).data("offsetTop", $(this).parent().offset().top);
});

function setImgScroll() {
	'use strict';
	
	var i,
		imgOffsetTop,
		scrollHeightOfElement,
		windowHeightReduced = $(window).height() / 5;
	
	for (i = 0; i < allImagesLength; i += 1) {
		imgOffsetTop = $(allImages[i]).data("offsetTop");
		scrollHeightOfElement = ((currentScrollTop - imgOffsetTop) * 0.7) - windowHeightReduced + (imgOffsetTop / 20);
		
		$(allImages[i]).css("transform", "translateY(" + scrollHeightOfElement + "px)");
	}
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
    $(".header").addClass("ios-safari-margin");
}

$(window).scroll(function () {
	'use strict';
	
    currentScrollTop = $("body").scrollTop();
});

window.addEventListener("mousewheel", function () { 'use strict'; });

animLoop();