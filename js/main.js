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
});