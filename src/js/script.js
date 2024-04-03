const $menu = document.querySelector('.nav-menu');
const $btnMenu = document.querySelector('.burger-button');
const $header = document.querySelector('.header');
let lastScrollTop = 0;

$btnMenu.addEventListener('click', () => {
    console.log('2');
    if ($menu.classList.contains('translate-y-0')) {
        $menu.classList.remove('translate-y-0');
        $menu.classList.add('-translate-y-full');
    } else {
        $menu.classList.remove('-translate-y-full');
        $menu.classList.add('translate-y-0');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.second-swiperr', {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });
});
