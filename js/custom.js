function scrollSmoothTo(element) {
	$('.parallax-container').animate({
		scrollTop: $(element).offset().top
	}, 1000);
}