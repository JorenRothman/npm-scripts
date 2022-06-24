import Swiper, { Navigation } from 'swiper';

const ImageSlider = {
    init() {
        this.createInstances();

        console.info('ImageSlider initialized');
    },

    createInstances() {
        new Swiper('.image-slider .swiper', {
            modules: [Navigation],
            loop: false,
            slidesPerView: 1.2,
            spaceBetween: 30,
            navigation: {
                prevEl: '.image-slider__prev',
                nextEl: '.image-slider__next',
            },
            breakpoints: {
                736: {
                    slidesPerView: 2.4,
                },
            },
        });
    },
};

export default ImageSlider;
