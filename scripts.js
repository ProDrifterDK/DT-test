$(document).ready(function () {
    $('#logoCarousel').carousel({
        interval: false
    });

    $('a[href="#contact"]').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 1000);
    });

    $('#testimonialCarousel').carousel({
        interval: 5000
    });

    $('#featureCarousel').carousel({
        interval: 5000
    });
});
