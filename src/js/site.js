import 'regenerator-runtime';

import $ from 'jquery';
import LazyLoad from './modules/LazyLoad';
import MobileMenu from './modules/MobileMenu';
import SiteHeaderBackground from './modules/SiteHeaderBackground';

/* eslint-disable */
__webpack_public_path__ = window.publicPath;
/* eslint-enable */

LazyLoad.init();
SiteHeaderBackground.init();
MobileMenu.init();

/**
 * Dynamically load a javascript module
 */
(async () => {
    if ($('.form').length > 0) {
        const { default: Forms } = await import('./modules/Forms');

        Forms.init();
    }
})();

(async () => {
    if ($('.hero-slider').length > 0) {
        const { default: HeroSlider } = await import(
            './modules/sliders/HeroSlider'
        );

        HeroSlider.init();
    }
})();

(async () => {
    if ($('.steps').length > 0) {
        const { default: StepsSlider } = await import(
            './modules/sliders/StepsSlider'
        );

        StepsSlider.init();
    }
})();

(async () => {
    if ($('.image-slider').length > 0) {
        const { default: ImageSlider } = await import(
            './modules/sliders/ImageSlider'
        );

        ImageSlider.init();
    }
})();

(async () => {
    if ($('.people-slider').length > 0) {
        const { default: PeopleSlider } = await import(
            './modules/sliders/PeopleSlider'
        );

        PeopleSlider.init();
    }
})();

(async () => {
    if ($('.about-horizontal-texts').length > 0) {
        const { default: AboutTextSlider } = await import(
            './modules/sliders/AboutTextSlider'
        );

        AboutTextSlider.init();
    }
})();

(async () => {
    if ($('.filters').length > 0) {
        const { default: Select } = await import('./modules/Select');

        Select.init();

        const { default: Filters } = await import('./modules/Filters');

        Filters.init();
    }
})();

(async () => {
    if ($('.media__video').length > 0) {
        const { default: Videos } = await import('./modules/Videos');

        Videos.init();
    }
})();

(async () => {
    if ($('.single-story-reference').length > 0) {
        const { default: Share } = await import('./modules/Share');

        Share.init();
    }
})();

(async () => {
    if ($('.index').length > 0) {
        const { default: IndexAccordion } = await import(
            './modules/IndexAccordion'
        );

        IndexAccordion.init();
    }
})();

(async () => {
    if ($('[data-scroll]').length > 0) {
        const { default: Locomotive } = await import('./modules/Locomotive');

        Locomotive.init();
    }
})();
