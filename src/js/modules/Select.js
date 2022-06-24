import $ from 'jquery';
import 'select2';

const Select = {
    $siteHeader: $('.site-header'),

    init() {
        this._eventListeners();
        this._init();
        console.info('Select Initialized');
    },

    _eventListeners() {
        $('select').on('change', function () {
            window.FWP.refresh(); /* eslint-disable no-use-before-define */
        });

        $(document).on('facetwp-loaded', function () {
            $('select').on('change', function () {
                window.FWP.refresh(); /* eslint-disable no-use-before-define */
            });

            Select._init();
        });
    },

    _init() {
        $('select').each(function () {
            $(this).select2({
                minimumResultsForSearch: Infinity,
                dropdownParent: $(this).parent(),
            });
        });
    },
};

export default Select;
