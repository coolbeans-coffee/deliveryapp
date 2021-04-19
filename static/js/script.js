(function ($) {
	'use strict';
	/* ========================================================================= */
	/*	Post image slider
	/* ========================================================================= */

	$('#post-thumb, #gallery-post').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000

	});

	$('#features').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});


	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */


	$('#navigation').sticky({
		topSpacing: 0
	});
})(jQuery);
// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});
wow.init();


/* ========================================================================= */
/*	Smooth Scroll
/* ========================================================================= */
var scroll = new SmoothScroll('a[href*=\'#\']');