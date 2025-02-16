const swiperPartners = new Swiper('.swiper-partners', {
    navigation: {
        nextEl: ".swiper-button-next-loop",
        prevEl: ".swiper-button-prev-loop",
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
        nextEl: ".swiper-button-next-arrow",
        prevEl: ".swiper-button-prev-arrow",
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