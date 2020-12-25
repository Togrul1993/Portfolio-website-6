// WOW JS
new WOW().init();
// WOW JS
/*var wow = new WOW(
	{
		boxClass: 'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 0,          // distance to the element when triggering the animation (default is 0)
		mobile: true,       // trigger animations on mobile devices (default is true)
		live: true,       // act on asynchronously loaded content (default is true)
		callback: function (box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null,    // optional scroll container selector, otherwise use window,
		resetAnimation: true,     // reset animation on end (default is true)
	}
);
wow.init();
*/

// WOW JS END


$(document).ready(() => {
	'use strict';

	// Navbar Menu/MenuBtn Sticky

	$(window).scroll(() => {
		if (this.scrollY > 20) {
			$('.navbar').addClass("sticky");
			$('.menu-btn').addClass("btn-sticky");

		} else {
			$('.navbar').removeClass("sticky");
			$('.menu-btn').removeClass("btn-sticky");
		}




		if (this.scrollY > 500) {
			$('.scroll-up-btn').addClass("show");
		} else {
			$('.scroll-up-btn').removeClass("show");
		}




		if (this.scrollY > 40) {
			$('.nav').addClass("nav-sticky");
		} else {
			$('.nav').removeClass("nav-sticky");
		}
	})

	// Navbar Menu/MenuBtn  Sticky End




	// Slider-up Script
	$('.scroll-up-btn').click(() => {
		$('html').animate({
			scrollTop: 0
		})
	})

	// Slider-up Script End



	// Toggle Menu/Navbar Script
	$('.menu-btn').click(() => {
		$('.navbar .menu').toggleClass('active');
	});

	// Toggle Menu/Navbar Script End



	// Typed Js
	var typed = new Typed(".typing", {
		strings: ["FronEnd Developer", "FreeLancer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	})
	// Typed Js End


	// Typed 2 Js
	var typed = new Typed(".typing2", {
		strings: ["FronEnd Developer", "FreeLancer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	})
	// Typed 2 Js End





	// Owl Carousel Start
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},

			600: {
				items: 2,
				nav: false
			},

			1000: {
				items: 3,
				nav: false
			}
		}
	});
});