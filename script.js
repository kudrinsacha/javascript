import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

if (window.innerWidth < 768) {
    const swiper = new Swiper('.swiper', {
        spaceBetween: 16,
        centeredSlides: true,
        slidesOffsetBefore: 16,
        width: 240,
        height: 72,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
}

if (window.innerWidth >= 768) {
    const slides = document.querySelectorAll('.swiper-slide:nth-child(n + 7)');
    const buttonShow = document.querySelector('.swiper-show')
    slides.forEach((slide) => {
        slide.classList.add('hidden');
    });
    buttonShow.classList.remove('hidden')
}

if (window.innerWidth >= 1120) {
    const slides = document.querySelectorAll('.swiper-slide:nth-child(-n + 8)');
    slides.forEach((slide) => {
        slide.classList.remove('hidden');
    });
}

if (window.innerWidth >= 1360) {
    const slides = document.querySelectorAll('.swiper-slide')
    const buttonShow = document.querySelector('.swiper-show')
    slides.forEach((slide) => {
        slide.classList.remove('hidden')
    })
    buttonShow.classList.add('hidden')
}

const buttonShow = document.querySelector('.swiper-show');

buttonShow.onclick = function () {
    const slides = document.querySelectorAll('.swiper-slide');
    const showElements = document.querySelectorAll('.swiper-show__arrow, .swiper-show__text');

    if (buttonShow.classList.contains('active')) {

        buttonShow.classList.remove('active');

        if (window.innerWidth >= 768 && window.innerWidth < 1120) {
            const hiddenSlides = document.querySelectorAll('.swiper-slide:nth-child(n+7)')
            hiddenSlides.forEach((slide) => {
                slide.classList.add('hidden');
            });
        } else if (window.innerWidth >= 1120) {
            const hiddenSlides = document.querySelectorAll('.swiper-slide:nth-child(n+9)')
            hiddenSlides.forEach((slide) => {
                slide.classList.add('hidden');
            });
        }

        showElements.forEach((item) => {
            item.classList.toggle('hidden');
        });

    } else {

        slides.forEach((slide) => {
            slide.classList.remove('hidden');
        });
        showElements.forEach((item) => {
            item.classList.toggle('hidden');
        });

        buttonShow.classList.add('active');

    }
};