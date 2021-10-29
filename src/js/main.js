document.addEventListener("DOMContentLoaded", function () {
    const btnOrder = document.querySelector('.header__button');
    if (document.documentElement.clientWidth < 768) {
        btnOrder.innerHTML = "заявка";
    } else {
        btnOrder.innerHTML = "оставить заявку";
    }

    const headerHeight = document.querySelector('.header').clientHeight;
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.style.height = headerHeight + "px";
    }

    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.menu');
    const closeMenu = document.querySelector('.menu__close');
    burger.addEventListener('click', function () {
        menu.classList.toggle('active');
    })

    closeMenu.addEventListener('click', function () {
        menu.classList.remove('active');
    });
})

$(document).ready(function () {
    $('.slider-clients').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        responsive: [{
                breakpoint: 1919,
                settings: {
                    slidesToScroll: 1,
                    infinite: true,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

        ]
    })

    $('.header__language button').click(function () {
        $(this).toggleClass('active');
        $(this).siblings().toggleClass('active');
    })

    // tooltip
    $(".tooltip-item").mousemove(function (e) {
        $('.tooltip').css('left', e.clientX + 10).css('top', e.clientY + 10).css('display', 'block');
    });

    $(".tooltip-item").mouseout(function () {
        $('.tooltip').css('display', 'none');
    });

    // anchor
    $(".arrow-up").hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".arrow-up").fadeIn();
        } else {
            $(".arrow-up").fadeOut();
        }
    });

    $(".arrow-up").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
})