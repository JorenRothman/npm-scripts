import Swiper, { Navigation } from 'swiper';

const StepsSlider = {
    init() {
        this.createInstances();

        console.info('StepsSlider initialized');
    },

    createInstances() {
        new Swiper('.steps .swiper', {
            modules: [Navigation],
            loop: false,
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                prevEl: '.steps__prev',
                nextEl: '.steps__next',
            },
            breakpoints: {
                650: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    },
};

export default StepsSlider;
