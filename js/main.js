$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("fixedMenu");
        } else {
            $(".header").removeClass("fixedMenu");
        }
       
    });
    $('.main_slider_baner').slick({
      autoplay: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            dots: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: false,
          }
        }
      ]
    });

    function isoTopActive() {
        // Iso top js


        $(".filtering_item_wrap").isotope({
            itemSelector: '.filter_item',
            layoutMode: 'fitRows'
        });

        var isOacTive = $('.parteflo_button button').click(function () {
            $(".parteflo_button button").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".filtering_item_wrap").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

    }
    isoTopActive();
	
	jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });

    /*---------LIGHT-BOX js-----------*/

    function lightBoxImages() {

        var selectorG = '.icon_link';
        if($(selectorG).length){
            var instanceG = $(selectorG).imageLightbox({
                quitOnDocClick:	false,
                button:         true,
                activity:       true,
                overlay:        true,
                arrows:         true,
                preloadNext:    true,
            });		
        }
    }

    lightBoxImages();


    $('.sssyour-class').slick({
        arrows: false,
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              dots: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              dots: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots: false,
            }
          }
        ]
    });
    
})
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}