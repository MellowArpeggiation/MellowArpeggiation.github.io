function scrollSmoothTo(element) {
	$('html body').animate({
		scrollTop: $(element).offset().top
	}, 1000);
}

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    $(".header").css("margin-top", -70)
}

$(window).scroll(function () {
    $(".header").css({
        transform: "rotate(" + $(this).scrollTop() + "deg)"
    })
})