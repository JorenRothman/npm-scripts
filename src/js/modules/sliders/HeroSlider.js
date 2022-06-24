import Swiper, { Autoplay } from 'swiper';

const HeroSlider = {
    init() {
        this.createInstances();

        console.info('HeroSlider initialized');
    },

    createInstances() {
        new Swiper('.hero-slider .swiper', {
            modules: [Autoplay],
            loop: true,
            slidesPerView: 1.1,
            autoplay: {
                delay: 4000,
            },
        });
    },
};

export default HeroSlider;
