import $ from 'jquery';

const Filters = {
    $filterReset: $('.filters__reset'),

    init() {
        this._eventListeners();
        this._check();
        console.info('Filters Initialized');
    },

    _eventListeners() {
        $(document).on('facetwp-loaded', function () {
            Filters._check();
        });
    },

    _hide() {
        Filters.$filterReset.removeClass('visible');
        $('body').removeClass('has-active-filters');
    },

    _show() {
        Filters.$filterReset.addClass('visible');
        $('body').addClass('has-active-filters');
    },

    _check() {
        // if (
        //     window.FWP.facets.audience.length < 1 &&
        //     window.FWP.facets.type.length < 1
        // ) {
        //     Filters._hide();
        // } else {
        //     Filters._show();
        // }
    },
};

export default Filters;
