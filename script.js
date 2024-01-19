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
    const slides = document.querySelectorAll('.swiper-slide_hidden_768');
    slides.forEach((slide) => {
        slide.classList.add('hidden');
    });
}
if (window.innerWidth >= 1120) {
    const oneSlide = document.querySelector('.swiper-slide_hidden_320')
    const twoSlide = document.querySelector('.swiper-slide_hidden_768')

    oneSlide.classList.remove('swiper-slide_hidden_320', 'hidden')
    twoSlide.classList.remove('swiper-slide_hidden_768', 'hidden')
}

const buttonShow = document.querySelector('.swiper-show');

buttonShow.onclick = function () {
    const slides = document.querySelectorAll('.swiper-slide');
    const showElements = document.querySelectorAll('.swiper-show__arrow, .swiper-show__text');
    const hiddenSlides = document.querySelectorAll('.swiper-slide_hidden_768, .swiper-slide_hidden_320');

    if (buttonShow.classList.contains('active')) {
        buttonShow.classList.remove('active');

        hiddenSlides.forEach((slide) => {
            slide.classList.add('hidden');
        });
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