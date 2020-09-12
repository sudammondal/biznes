$(document).ready(function () {
	//js for scroll to section content
	$('.up_icon a[href^="#"').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 2000);
		}
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() > 0) {
			$(".header").addClass("fixedMenu");
		}
		else {
			$(".header").removeClass("fixedMenu");
		}
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() > 260) {
			$(".up_icon").addClass("up_iconFixd");
		}
		else {
			$(".up_icon").removeClass("up_iconFixd");
		}
	});
	$('.main_slider_baner').slick({
		autoplay: true
		, slidesToScroll: 1
		, slidesToShow: 1
		, dots: true
		, arrows: false
		, infinite: true
		, speed: 300
		, responsive: [
			{
				breakpoint: 1024
				, settings: {
					slidesToShow: 1
					, dots: false
				, }
        }
			, {
				breakpoint: 767
				, settings: {
					slidesToShow: 1
					, dots: false
				, }
        }
			, {
				breakpoint: 600
				, settings: {
					slidesToShow: 1
					, dots: false
				, }
        }
			, {
				breakpoint: 480
				, settings: {
					slidesToShow: 1
					, dots: false
				, }
        }
      ]
	});

	function isoTopActive() {
		// Iso top js
		$(".filtering_item_wrap").isotope({
			itemSelector: '.filter_item'
			, layoutMode: 'fitRows'
		});
		var isOacTive = $('.parteflo_button button').click(function () {
			$(".parteflo_button button").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$(".filtering_item_wrap").isotope({
				filter: selector
				, animationOptions: {
					duration: 750
					, easing: 'linear'
					, queue: false
				, }
			});
			return false;
		});
	}
	isoTopActive();
	jQuery(document).ready(function ($) {
		$('.counter').counterUp({
			delay: 10
			, time: 1000
		});
	});
	/*---------LIGHT-BOX js-----------*/
	function lightBoxImages() {
		var selectorG = '.icon_link';
		if ($(selectorG).length) {
			var instanceG = $(selectorG).imageLightbox({
				quitOnDocClick: false
				, button: true
				, activity: true
				, overlay: true
				, arrows: true
				, preloadNext: true
			, });
		}
	}
	lightBoxImages();
	$('.sssyour-class').slick({
		arrows: false
		, autoplay: true
		, dots: false
		, infinite: true
		, speed: 300
		, slidesToShow: 5
		, slidesToScroll: 1
		, responsive: [
			{
				breakpoint: 1024
				, settings: {
					slidesToShow: 3
					, dots: false
				, }
          }
			, {
				breakpoint: 767
				, settings: {
					slidesToShow: 2
					, dots: false
				, }
          }
			, {
				breakpoint: 600
				, settings: {
					slidesToShow: 2
					, dots: false
				, }
          }
			, {
				breakpoint: 480
				, settings: {
					slidesToShow: 1
					, dots: false
				, }
          }
        ]
	});
})