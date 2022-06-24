import $ from 'jquery';

const IndexAccordion = {
    init() {
        this._eventListeners();
        console.info('IndexAccordion Initialized');
    },

    _eventListeners() {
        $('.index__header').on('click', function (e) {
            e.preventDefault();
            IndexAccordion._toggleAccordion($(this).parent());
        });

        $(document).on('facetwp-loaded', function () {
            $('.index__header').on('click', function (e) {
                e.preventDefault();
                IndexAccordion._toggleAccordion($(this).parent());
            });
        });
    },

    _toggleAccordion($accordion) {
        $accordion.toggleClass('is-active');
        $accordion.find('.index__body').slideToggle('fast');
    },
};

export default IndexAccordion;
