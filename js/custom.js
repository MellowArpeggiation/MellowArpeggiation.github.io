(function () {
    'use strict';

    var currentScrollTop = window.pageYOffset,
        oldScrollTop = window.pageYOffset,
        $allWrappers = $('.img-wrapper'),
        $allImages = $('.img-wrapper img'),
        // We keep a reference to the length of the array to prevent extra array accesses
        allImagesLength = $allImages.length,
        // We also store the image offsets as they stay the same
        allImagesOffsets = [],
        $downArrow = $('.chevron-down'),
        scrollCoefficient = 2.2,
        scrollTime = 1000,
        windowHeightReduced = $(window).height() / 3,
        $container = $('.container'),
        currentSquish = 0,
        squishDamping = 0.8,
        skewReduction = 50,
        translationBoost = 8,
        reducedMotionEnabled;

    /**
     * @desc Record the image offset as a data attribute in the image
     */
    function getImageOffsets() {
        allImagesOffsets = [];

        $allImages.each(function () {
            allImagesOffsets.push($(this).parent().offset().top);
        });

        windowHeightReduced = $(window).height() / 3;
    }

    /**
     * @desc Set the image parallax scroll offset
     * @param {Number} currentScrollY - The current scroll offset from the top
     */
    function setImgScroll(currentScrollY) {
        if (reducedMotionEnabled) return;

        // Optimised array loop, forEach() is too slow for 60fps
        for (var i = 0; i < allImagesLength; i += 1) {
            var wrapper = $allWrappers[i],
                boundingRect = wrapper.getBoundingClientRect();

            // Check if onscreen
            if (boundingRect.bottom < 0 || boundingRect.top > window.innerHeight) {
                continue;
            }

            // Get new parallax offset
            var image = $allImages[i],
                imgOffsetTop = allImagesOffsets[i],
                scrollHeightOfElement = (currentScrollY - imgOffsetTop) + (imgOffsetTop - currentScrollY) / scrollCoefficient;

            // Set image transform
            image.style.transform = 'translate3d(0px, ' + scrollHeightOfElement + 'px, 0px)';
        }
    }

    /**
     * @desc Fade out the content arrow depending on where the user is on the page
     * @param {Number} currentScrollY - The current scroll offset from the top
     */
    function fadeDownArrow(currentScrollY) {
        if (!$downArrow.hasClass('animation-started')) {
            return;
        }

        var newOpacity = (windowHeightReduced - currentScrollY) / windowHeightReduced;

        newOpacity = newOpacity < 0 ? 0 : newOpacity;

        $downArrow.css('opacity', newOpacity);
    }

    /**
     * @desc For the scroll squishing, we need to lock some aspects of the page to prevent scroll bar oddities
     */
    function scrollSquishInit() {
        $container.height($container.outerHeight());
        $container.css('overflow-y', 'hidden');
    }

    /**
     * @desc Every frame, adjust the skew of the page, so that when scrolling we get a little squishing effect
     * @param {Number} currentScrollDelta - The delta of the current scroll, 0 when no scrolling occurred this frame
     */
    function scrollSquish(currentScrollDelta) {
        if (reducedMotionEnabled) return;
        currentSquish += (currentScrollDelta / skewReduction);
        currentSquish = currentSquish * squishDamping;
        if (Math.abs(currentSquish) < 0.1) currentSquish = 0;
        $container.css('transform', 'translateY(' + (currentSquish * translationBoost) + 'px) skewY(' + currentSquish + 'deg)');
    }

    /**
     * @desc Highly optimised animation loop, uses requestAnimationFrame for max performance
     */
    function animLoop() {
        currentScrollTop = window.pageYOffset;

        scrollSquish(currentScrollTop - oldScrollTop);

        if (currentScrollTop !== oldScrollTop) {
            setImgScroll(currentScrollTop);
            fadeDownArrow(currentScrollTop);
            oldScrollTop = currentScrollTop;
        }

        // Call this function once every frame
        requestAnimationFrame(animLoop);
    }

    function init() {
        // Load the users motion reduction preference, since for sensitive people it could be a bit of a vomit comet
        var motionPreference = window.magica11y.prefersReducedMotion.default();
        reducedMotionEnabled = (motionPreference === window.magica11y.prefersReducedMotion.motionPreferences.REDUCE);

        // Get image y offset from top of screen
        getImageOffsets();

        scrollSquishInit();

        // Begin the animation loop
        requestAnimationFrame(animLoop);

        // Get all non empty hash links and attach scroll
        $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
            var pathEquivalent = location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, ''),
                hostEquivalent = location.hostname === this.hostname;
            if (pathEquivalent && hostEquivalent) {
                var hash = this.hash,
                    $target = $(hash);

                $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    // Prevent default browser behaviour
                    event.preventDefault();
                    // Scroll for scrollTime to the marker
                    $('html, body').animate({
                        scrollTop: $target.offset().top
                    }, scrollTime, function () {
                        // After animation finishes, set focus
                        // Reimplements default browser behaviour
                        location.hash = hash;
                        $target.focus();
                        if ($target.is(':focus')) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus(); // Re set the focus
                        }
                    });
                }
            }
        });
    }

    $(window).resize(function () {
        getImageOffsets();
    });

    /** Catch all the different browser implementations of animation end.
     * Then unset the animation rule, to allow Opacity changes
     */
    $downArrow.on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function () {
        $(this).css('animation', 'initial');
    });
    $downArrow.on('animationstart webkitAnimationStart oAnimationStart MSAnimationStart', function () {
        $(this).addClass('animation-started');
        fadeDownArrow(currentScrollTop);
    });

    // Fix Chrome scroll jitter
    window.addEventListener('mousewheel', function () {}, {
        passive: true
    });

    // Prepare the fancy source buttons
    $('.button-source').each(function () {
        var $item = $(this);
        var lines = [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
        ].map(function (value) {
            return '<div style="width:' + value + '%;"></div>';
        });

        // Add the first 6 lines to the end, so it loops smoothly
        lines.push(lines.slice(0, 5).join(''));

        $item.prepend('<div class="source-lines">' + lines.join('') + '</div>');
    });

    // Now we start the execution
    // Since we tail load the JS, we don't have to wait for the page
    init();
})();
