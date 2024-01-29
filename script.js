import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

let swiper;

function slider() {
    if (window.innerWidth < 768) {
        const buttonShow = document.querySelector('.swiper-show')
        const slides = document.querySelectorAll('.swiper-slide:nth-child(n + 7)');
        const slidesHidden = document.querySelectorAll('.swiper-slide:nth-child(n + 9)');
        swiper = new Swiper('.swiper', {
            spaceBetween: 16,
            slidesOffsetBefore: 16,
            width: 240,
            height: 72,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        });
        buttonShow.classList.add('hidden')
        slides.forEach((slide) => {
            slide.classList.remove('hidden');
        });
        slidesHidden.forEach((slide) => {
            slide.classList.add('hidden');
        });
    }

    if (window.innerWidth > 767) {
        const slides = document.querySelectorAll('.swiper-slide:nth-child(n + 7)');
        const buttonShow = document.querySelector('.swiper-show')
        slides.forEach((slide) => {
            slide.classList.add('hidden');
        });
        buttonShow.classList.remove('hidden')
        if (document.querySelector(".swiper").classList.contains("swiper-initialized")) {
            swiper.destroy();
        }
    }

    if (window.innerWidth > 1119) {
        const slides = document.querySelectorAll('.swiper-slide:nth-child(-n + 8)');
        slides.forEach((slide) => {
            slide.classList.remove('hidden');
        });
    }

    if (window.innerWidth > 1359) {
        const slides = document.querySelectorAll('.swiper-slide')
        const buttonShow = document.querySelector('.swiper-show')
        slides.forEach((slide) => {
            slide.classList.remove('hidden')
        })
        buttonShow.classList.add('hidden')
    }
}


const buttonShow = document.querySelector('.swiper-show');

buttonShow.onclick = function () {
    const slides = document.querySelectorAll('.swiper-slide');
    const showElements = document.querySelectorAll('.swiper-show__arrow, .swiper-show__text');

    if (buttonShow.classList.contains('active')) {

        buttonShow.classList.remove('active');

        if (window.innerWidth > 767 && window.innerWidth < 1120) {
            const hiddenSlides = document.querySelectorAll('.swiper-slide:nth-child(n+7)')
            hiddenSlides.forEach((slide) => {
                slide.classList.add('hidden');
            });
        } else if (window.innerWidth > 1119) {
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

slider();
window.addEventListener('resize', slider);