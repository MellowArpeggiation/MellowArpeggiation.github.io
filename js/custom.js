function scrollSmoothTo(element) {
	$('html body').animate({
		scrollTop: $(element).offset().top
	}, 1000);
}

function setImgScroll() {
     $(".img-wrapper img").each(function (e) {
        var bodyScrollTop = $("body").scrollTop(),
            imgOffsetTop = $(this).parent().offset().top,
            scrollHeightOfElement = ((bodyScrollTop - imgOffsetTop) * 0.7) - ($(window).height() / 5) + (imgOffsetTop / 20);
        
        $(this).css("top", scrollHeightOfElement);
        console.log(scrollHeightOfElement);
    })
}

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    $(".header").css("margin-top", -70)
}

$(window).scroll(function () {
    setImgScroll();
})

setImgScroll();