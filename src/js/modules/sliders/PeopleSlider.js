import Swiper, { Navigation } from 'swiper';

const PeopleSlider = {
    init() {
        this.createInstances();

        console.info('PeopleSlider initialized');
    },

    createInstances() {
        new Swiper('.people-slider .swiper', {
            modules: [Navigation],
            loop: false,
            slidesPerView: 1.2,
            spaceBetween: 30,
            navigation: {
                prevEl: '.people-slider__prev',
                nextEl: '.people-slider__next',
            },
            breakpoints: {
                736: {
                    slidesPerView: 2.4,
                },
            },
        });
    },
};

export default PeopleSlider;
