(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

   

    
})(jQuery);


document.addEventListener("DOMContentLoaded", function() {
    const teamLink = document.getElementById('teamLink');
    const dropdownMenu = teamLink.nextElementSibling;
    let tapCount = 0;

    teamLink.addEventListener('click', function(event) {
        if (window.innerWidth <= 991.98) {
            event.preventDefault();
            tapCount++;

            if (tapCount === 1) {
                dropdownMenu.style.display = 'block';
                setTimeout(() => { tapCount = 0; }, 300);  // Reset tap count after 300ms
            } else if (tapCount === 2) {
                window.location.href = teamLink.getAttribute('href');
            }
        }
    });

    document.addEventListener('click', function(event) {
        if (!teamLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
            tapCount = 0;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const teamLink = document.getElementById('vehicleLink');
    const dropdownMenu = teamLink.nextElementSibling;
    let tapCount = 0;

    teamLink.addEventListener('click', function(event) {
        if (window.innerWidth <= 991.98) {
            event.preventDefault();
            tapCount++;

            if (tapCount === 1) {
                dropdownMenu.style.display = 'block';
                setTimeout(() => { tapCount = 0; }, 300);  // Reset tap count after 300ms
            } else if (tapCount === 2) {
                window.location.href = teamLink.getAttribute('href');
            }
        }
    });

    document.addEventListener('click', function(event) {
        if (!teamLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
            tapCount = 0;
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
  
  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });



});
//make dropdown menus work on mobile

