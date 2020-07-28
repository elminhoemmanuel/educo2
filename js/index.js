

$(document).ready(function(){

    // for responsiv navbar
    function openNav() {
        $("#mySidenav").css("width","100%");
    }
      
    function closeNav() {
        $("#mySidenav").css("width","0")
    }

    $(".dropper").click(openNav);
    $(".closenav").click(closeNav);
    $(".closers").click(closeNav);
    

    var navLarge = $('.nav-lg'); 
    var navSmall = $('.nav-sm');
    var nav_class = 'shadow-bottom'; // Change to class name
    var threshold = 100; // Change to pixels scrolled

    $(window).scroll(function () {
        var distance = $(this).scrollTop();
        if (distance > threshold) { // If scrolled past threshold
            navLarge.addClass("shadow-bottom");
            navSmall.addClass("shadow-bottom");
        } else { // If user scrolls back to top
            if (navLarge.hasClass("shadow-bottom")) { // And if class has been added
                navLarge.removeClass("shadow-bottom"); // Remove it
            }
            if (navSmall.hasClass("shadow-bottom")) { // And if class has been added
                navSmall.removeClass("shadow-bottom"); // Remove it
            }
        }
    });

})