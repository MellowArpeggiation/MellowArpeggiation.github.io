function scrollSmoothTo(element) {
	$('html body').animate({
		scrollTop: $(element).offset().top
	}, 1000);
}

