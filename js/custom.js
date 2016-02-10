function scrollSmoothTo(element) {
	$('html body').animate({
		scrollTop: $(element).offset().top
	}, 1000);
}

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    $(".header").css("margin-top", -70)
}

$(window).scroll(function () {
    $(".img-wrapper img").each(function (e) {
        var bodyScrollTop = $("body").scrollTop(),
            imgOffsetTop = $(this).parent().offset().top,
            scrollHeightOfElement = ((bodyScrollTop - imgOffsetTop) * 1.3) - ($(window).height() / 6);
        
        $(this).css("top", scrollHeightOfElement);
        console.log(scrollHeightOfElement);
    })
})