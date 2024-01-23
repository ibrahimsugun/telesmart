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


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
   

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });





    
})(jQuery);

  function checkFormAndRedirect() {
        var form = document.getElementById('quoteForm');
        var allFilled = true;

        for (var i = 0; i < form.elements.length; i++) {
            if (form.elements[i].type == "text" && form.elements[i].value === "") {
                allFilled = false;
                break;
            }
        }

        if (allFilled) {
            setTimeout(function() {
                window.location.href = '/';
            }, 1000); 
        } else {
            alert('Please fill in all the fields.');
        }
    }