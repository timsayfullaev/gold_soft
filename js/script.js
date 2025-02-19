'use strict';

const swiperPartners = new Swiper('.swiper-partners', {
    navigation: {
        nextEl: ".swiper-button-next-partners",
        prevEl: ".swiper-button-prev-partners",
    },
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 6,
        },
    },
});


const swiperNews = new Swiper('.swiper-news', {
    navigation: {
        nextEl: ".swiper-button-next-news",
        prevEl: ".swiper-button-prev-news",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

const swiperInstructions = new Swiper('.swiper-instructions', {
    navigation: {
        nextEl: ".swiper-button-next-instructions",
        prevEl: ".swiper-button-prev-instructions",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

const swiperReviews = new Swiper('.swiper-reviews', {
    navigation: {
        nextEl: ".swiper-button-next-reviews",
        prevEl: ".swiper-button-prev-reviews",
    },
    loop: true
});

Fancybox.bind('[data-fancybox="gallery-certificates"]', {});

document.getElementById("orderUserFile").addEventListener("change", function () {
    let fileName = this.files.length ? this.files[0].name : "Прикрепить файл";
    document.querySelector(".file-upload-text").textContent = fileName;
});