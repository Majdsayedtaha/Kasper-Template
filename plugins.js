$(document).ready(function() {
    //decleration variables
    var once1 = true;
    //to make the bullets active
    $('a').click(function() {
        $('a').removeClass('active');
        $(this).addClass('active');
    });
    $('.dots li').click(function() {
        $('li').removeClass('active-dot');
        $(this).addClass('active-dot');
    });
    $('.portfolio-content li').click(function() {
        $('li').removeClass('active-li');
        $(this).addClass('active-li');
    });
    // to showing and hiding the toggle menu 
    $(window).resize(function() {
        if (once1) {
            if ($(this).width() < 768) {
                once1 = false;
                $(".toggle-menu").click(function() {
                    $(".nav").slideToggle("slow", function() {
                        // Animation complete.
                    });
                });
            }
        }
        if ($(this).width() < 768) {
            $(".nav").css("display", "none");
        }
        if ($(this).width() > 768) {
            $(".nav").css("display", "flex");
        }
    });
    //to show the anchore to jump to top when rich height 500px
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $(".to-top").css("display", "block");
        } else {
            $(".to-top").css("display", "none");

        }

    });
    // to scroll smoothing
    $(function() {
        $('.smooth').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 200); // The number here represents the speed of the scroll in milliseconds
                    return false;
                }
            }
        });
    });
});