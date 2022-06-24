import VanillaLazyLoad from 'vanilla-lazyload';
import $ from 'jquery';

const LazyLoad = {
    // More options can be found on
    // https://www.andreaverlicchi.eu/lazyload/#-api
    options: {
        container: document,
        elements_selector: '.lazy',
        threshold: 300,
    },

    instance: null,

    init() {
        this.createInstance();
        this._onGravityformLoaded();

        console.info('LazyLoad Initialized');
    },

    createInstance() {
        const lazyLoadInstance = new VanillaLazyLoad(this.options);

        this.instance = lazyLoadInstance;
    },

    update() {
        this.instance.update();
    },

    _onGravityformLoaded() {
        $(document).on('facetwp-loaded', function () {
            LazyLoad.instance.update();
        });
    },
};

export default LazyLoad;
