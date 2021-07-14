/*------------------------------------------------------------------
Project:    Yorker Single Page Theme
Author:     Frank John
Version:    1.3
-------------------------------------------------------------------*/



/*============================================== /*
		Loader
/*============================================== */

$(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})



/*============================================== /*
		Navigation Bar
/*============================================== */

/* Auto close navbar on click (mobile menu) */

$(".navbar-nav > li > a").click(function() {
    $(".navbar-collapse").collapse('hide');
});


/* Change navbar class on scroll */

$(".wrapper").waypoint(function() {
    $(".navbar").toggleClass("js-navbar-top");
    $(".navbar.js-toggleClass").toggleClass("navbar-default navbar-inverse");
    return false;
}, { offset: "-20px" });


/* Change navbar class on collapse/uncollapse in its top position */

$('.wrapper .navbar-collapse').on('show.bs.collapse', function () {
    $(".navbar.js-navbar-top").toggleClass("navbar-default navbar-inverse");
    $(".navbar").toggleClass("js-toggleClass js-noToggleClass");
});

$('.wrapper .navbar-collapse').on('hide.bs.collapse', function () {
    $(".navbar.js-navbar-top").toggleClass("navbar-default navbar-inverse");
    $(".navbar").toggleClass("js-toggleClass js-noToggleClass");
});


/* Sidebar */

$(".js-toggle-sidebar").on('click', function() {
    $(".wrapper").toggleClass("js-wrapper-aside");
    $(".navbar").toggleClass("js-navbar-aside");
    $(".sidebar").toggleClass("js-sidebar-aside");
    return false;
});


$(document).ready(function() {
    $(".navbar-toggle").on("click", function() {
        $(this).toggleClass("active");
    });
});


/**
 * Smooth scroll to anchor
 */

$(function() {
    $('.navbar a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 20) // 20px offset for navbar menu
                }, 1000);
                return false;
            }
        }
    });
});





/*============================================== /*
		 Portfolio
/*==============================================*/

var worksgrid = $('#works-grid'),
    filters = $('#filters');


$('a', filters).on('click', function() {
    var selector = $(this).attr('data-filter');

    $('.current', filters).removeClass('current');
    $(this).addClass('current');

    worksgrid.isotope({
        filter: selector
    });

    return false;
});

$(window).on('resize', function() {
    worksgrid.imagesLoaded(function() {
        worksgrid.isotope({
            layoutMode: 'masonry',
            itemSelector: '.work-item',
            transitionDuration: '0.3s',
        });
    });
}).resize();




/*==============================================/*
		 Video popup, Gallery
/*==============================================*/

$('.image-popup').magnificPopup({
    type: 'image'
});

$('a.project-gallery').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});

$('.video-popup').magnificPopup({
    type: 'iframe',
  });

//For video Section
$('.video-pop-up').magnificPopup({
    type: 'iframe',
  });




/* ==============================================
        Owl Carousel
=============================================== */

/*Tesimonial Slider*/
$(document).ready(function() {

    var carousel = $(".testimonial-slider");

    carousel.owlCarousel({
        pagination: true,
        slideSpeed: 800,
        autoPlay: 6000,
        items: 1,
        stopOnHover: true,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
    });



});

		
		 $("#carousel-our-clients").owlCarousel({
     stopOnHover: true,
        navigation: false,
				pagination:true,
        paginationSpeed: 1000,
        goToFirstSpeed: 3500,
	slideSpeed : 800,
        autoPlay: 6000,
        items : 5,
		stopOnHover : true,
        itemsDesktop : [1199,5],
        itemsDesktopSmall : [979,3],
		itemsTablet :	[768,3],
		itemsMobile :	[479,2],

    });	
		
		
		
			
	 	$(document).ready(function() {
 
  var carousel = $(".testimonial-carousel");
  carousel.owlCarousel({
pagination: true,
	slideSpeed : 800,
        autoPlay: 6000,
        items : 1,
		stopOnHover : true,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
		itemsTablet :	[768,1],
		});
 

 
});


//app screenshots
	$("#app-screenshots").owlCarousel({
		items: 5,
		itemsDesktop: [1199,5],
		itemsDesktopSmall: [980,4],
		itemsTablet: [768,3],
		itemsTabletSmall: [590,2],
		itemsMobile: [479,1],
		autoPlay: true,
		stopOnHover: true,
		pagination: true
	});
	
	//person Profile
	$("#person-profile").owlCarousel({
		items: 1,
		itemsDesktop: [1199,5],
		itemsDesktopSmall: [980,4],
		itemsTablet: [768,3],
		itemsTabletSmall: [590,2],
		itemsMobile: [479,1],
		autoPlay: true,
		stopOnHover: true,
		pagination: true
	});
	
	//testimonials
	$("#testimonials").owlCarousel({
		items: 1,
		itemsDesktop: [1199,5],
		itemsDesktopSmall: [980,4],
		itemsTablet: [768,3],
		itemsTabletSmall: [590,2],
		itemsMobile: [479,1],
		autoPlay: true,
		stopOnHover: true,
		pagination: true
	});
	
		//Nivo lightbox settings
	$('.lightbox').nivoLightbox();
 /* ---------------------------------------------
         accordion
         --------------------------------------------- */


        var allPanels = $(".accordion > dd").hide();
        allPanels.first().slideDown("easeOutExpo");
        $(".accordion").each(function () {
            $(this).find("dt > a").first().addClass("active").parent().next().css({display: "block"});
        });

        $(".accordion > dt > a").click(function () {

            var current = $(this).parent().next("dd");
            $(this).parents(".accordion").find("dt > a").removeClass("active");
            $(this).addClass("active");
            $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
            $(this).parent().next().slideDown("easeOutExpo");

            return false;

        });

$('.parallax_banner').height($(window).height());

/* ====================================================================== */
/*	//Parallax using Stellar
/* ====================================================================== */	

//Parallax using Stellar
$.stellar({
    horizontalScrolling: false,
    responsive: true
});
			
			

/* ==============================================
        Facts and figures Counters
=============================================== */
		
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


/* ==============================================
  A JQuery plugin for fluid width video embeds
=============================================== */

   $('body').fitVids();

	
		/* ---------------------------------------------
         Progress bars
         --------------------------------------------- */


        var progressBar = $(".progress-bar");
        progressBar.each(function(indx){
            $(this).data('animated',0);
            if($.fn.visible) {
                animateProgressbar(this);
            }
        });
				
        $(window).on("scroll",function(){
            if($.fn.visible){
                progressBar.each(function(){
                    animateProgressbar(this);
                });
            }
        });


        function animateProgressbar(pb){
            if($(pb).data('animated')==0){
                if($(pb).visible()){
                    $(pb).css("width", $(pb).attr("aria-valuenow") + "%");
                    $(pb).data('animated',1);
                }
            }
        }

			
var resizeBackground = function() {
			$( ' .two-cols-description-image > img' ).each(function( i, el ) {

				var $el       = $( el ),
					$section  = $el.parent(),
					min_w     = 350,
					el_w      = el.tagName == 'VIDEO' ? el.videoWidth : el.naturalWidth,
					el_h      = el.tagName == 'VIDEO' ? el.videoHeight : el.naturalHeight,
					section_w = $section.outerWidth(),
					section_h = $section.outerHeight(),
					scale_w   = section_w / el_w,
					scale_h   = section_h / el_h,
					scale     = scale_w > scale_h ? scale_w : scale_h,
					new_el_w, new_el_h, offet_top, offet_left;

				if ( scale * el_w < min_w ) {
					scale = min_w / el_w;
				};

				new_el_w = scale * el_w;
				new_el_h = scale * el_h;
				offet_left = ( new_el_w - section_w ) / 2 * -1;
				offet_top  = ( new_el_h - section_h ) / 2 * -1;

				$el.css( 'width', new_el_w );
				$el.css( 'height', new_el_h );
				$el.css( 'marginTop', offet_top );
				$el.css( 'marginLeft', offet_left );
			});

		};

		jQuery(document).ready(function($) {
			resizeBackground();
		});
		window.addEventListener("resize", resizeBackground);
        
        
        
		/* ---------------------------------------------- /*
		 * Scroll top
		/* ---------------------------------------------- */

		$(window).scroll(function() {
			if ($(this).scrollTop() > 300) {
				$('.scroll-up').addClass('scroll-top-show');
			} else {
				$('.scroll-up').removeClass('scroll-top-show');
			}
		});

		$('a[href="#totop"]').on('click', function() {
			$('html, body').animate({ scrollTop: 0 }, 'slow');
			return false;
		});
		
		

		
