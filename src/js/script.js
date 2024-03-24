const $menu = document.querySelector('.nav-menu');
const $btnMenu = document.querySelector('.burger-button');
const $header = document.querySelector('.header');
let lastScrollTop = 0;

$btnMenu.addEventListener('click', () => {
    $menu.classList.toggle('h-screen');
    if ($menu.classList.contains('translate-x-0')) {
        $menu.classList.remove('translate-x-0');
        $menu.classList.add('translate-x-full');
    } else {
        $menu.classList.remove('translate-x-full');
        $menu.classList.add('translate-x-0');
    }
});

window.addEventListener('scroll', async () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop && currentScroll > $header.offsetHeight) {
        // Прокрутка вниз
        
        $header.classList.add('-translate-y-full');
        await new Promise(resolve => setTimeout(resolve, 300)); // Даем 300 мс для выполнения анимации
        $header.classList.remove('fixed');
        $header.classList.remove('translate-y-0');
    } else if (currentScroll < lastScrollTop) {
        // Прокрутка вверх
        $header.classList.remove('relative');
        $header.classList.remove('-translate-y-full');
        await $header.classList.add('fixed');
        await $header.classList.add('translate-y-0')
    }

    lastScrollTop = currentScroll;
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
