import Swiper, { Autoplay, Navigation } from 'swiper';

const AboutTextSlider = {
    init() {
        this.createInstances();

        console.info('AboutTextSlider initialized');
    },

    createInstances() {
        new Swiper('.about-horizontal-texts .swiper', {
            modules: [Navigation, Autoplay],
            autoplay: {
                delay: 5000,
            },
            loop: true,
            slidesPerView: 1.6,
            spaceBetween: 0,
        });
    },
};

export default AboutTextSlider;
