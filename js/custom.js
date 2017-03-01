/*global $, requestAnimationFrame*/

function scrollSmoothTo(element) {
	'use strict';

	$("html, body").animate({
		scrollTop: $(element).offset().top
	}, 1000);
}

var currentScrollTop = $(window).scrollTop(),
	oldScrollTop,
	allImages = $(".img-wrapper img"),
	// We keep a reference to the length of the array to prevent extra array accesses
	allImagesLength = allImages.length,
	downArrow = $(".chevron-down");

allImages.each(function (e) {
	'use strict';
	
	$(this).data("offsetTop", $(this).parent().offset().top);
});

function setImgScroll(currentScrollY) {
	'use strict';
	
	var i,
		imgOffsetTop,
		scrollHeightOfElement,
		windowHeightReduced = $(window).height() / 6;
	
	// Optimised array loop, each is too slow for 60fps
	for (i = 0; i < allImagesLength; i += 1) {
		imgOffsetTop = $(allImages[i]).data("offsetTop");
		scrollHeightOfElement = ((currentScrollY - imgOffsetTop) * 0.7) - windowHeightReduced + (imgOffsetTop / 30);
		
		$(allImages[i]).css("transform", "translateY(" + scrollHeightOfElement + "px) translateZ(0)");
	}
}

function fadeDownArrow(currentScrollY) {
	'use strict';
	
	var windowHeightReduced = $(window).height() / 2,
		newOpacity = (windowHeightReduced - currentScrollY) / windowHeightReduced;
	newOpacity = newOpacity < 0 ? 0 : newOpacity;
	
	downArrow.css("opacity", newOpacity);
}

function animLoop() {
	'use strict';
	
	requestAnimationFrame(animLoop);
	if (currentScrollTop !== oldScrollTop) {
		setImgScroll(currentScrollTop);
		fadeDownArrow(currentScrollTop);
		oldScrollTop = currentScrollTop;
	}
}

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
	$(".header").addClass("ios-safari-margin");
}

$(window).scroll(function () {
	'use strict';
	
	currentScrollTop = $(window).scrollTop();
});

// Force browser optimisation
window.addEventListener("mousewheel", function () { 'use strict'; });

downArrow.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
	'use strict';
	
	$(this).css("animation", "initial");
});

requestAnimationFrame(animLoop);