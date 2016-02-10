function scrollSmoothTo(element) {
	$('html body').animate({
		scrollTop: $(element).offset().top
	}, 1000);
}

var currentScrollTop = $("body").scrollTop(),
    oldScrollTop;
function setImgScroll() {
     $(".img-wrapper img").each(function (e) {
        var imgOffsetTop = $(this).parent().offset().top,
            scrollHeightOfElement = ((currentScrollTop - imgOffsetTop) * 0.7) - ($(window).height() / 5) + (imgOffsetTop / 20);
        
        $(this).css("top", scrollHeightOfElement);
    });
}

function animLoop() {
    if (currentScrollTop !== oldScrollTop) {
        setImgScroll();
        oldScrollTop = currentScrollTop;
    }
    requestAnimationFrame(animLoop);
}

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    $(".header").css("margin-top", -70)
}

$(window).scroll(function () {
    currentScrollTop = $("body").scrollTop();
})

animLoop();