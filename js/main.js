jQuery(document).ready(function() {
    "use strict";
    $("#slider-carousel").carouFredSel({
        responsive: true,
        width: "100%",
        circular: true,
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".slidepager",
            anchorBuilder: false
        }
    });
    $(".portfolio-carousel").carouFredSel({
        responsive: true,
        width: "100%",
        circular: true,
        prev: ".prev",
        next: ".next",
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 4
            },
            height: "variable"
        }
    });
    $(".team-carousel").carouFredSel({
        responsive: true,
        width: "100%",
        circular: true,
        prev: "#team-prev",
        next: "#team-next",
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 4
            },
            height: "variable"
        }
    });
    $(".testimonial-carousel").carouFredSel({
        responsive: true,
        width: "100%",
        circular: true,
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".testimonial-nav",
            anchorBuilder: false
        }
    });
    $(window).scroll(function() {
        let top = $(window).scrollTop();
        if (top >= 112) {
            $("header").addClass("secondary-dark-blue-bg");
        } else {
            $("header").removeClass("secondary-dark-blue-bg");
        }
    });
    $('#menu').slicknav({
        label: '',
    });

    // steller js for parralax animation

    $('#main').stellar();

    // waypoint js

    $(".animation").each(function() {
        var waypoint = new Waypoint({
            element: this,
            handler: function(direction) {
                let animation = $(this.element).attr("data-animation");
                //console.log(animation);
                $(this.element).css("opacity", "1");
                $(this.element).addClass("animated " + animation);
            },
            offset: "75%"
        });

    });

    // smmoth scroll
    $('a').smoothScroll();
    //contact-form
    $('.contact #submit').on('click', function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        var form = new Array({ 'name': name, 'email': email, 'subject': subject, 'message': message });

        $.ajax({
            type: 'POST',
            url: "contact.php",
            data: ({ 'action': 'contact', 'form': form })
        }).done(function(data) {
            $('#contact .result').html(data);

            $(".contact-form")[0].reset();

        });



    });
});