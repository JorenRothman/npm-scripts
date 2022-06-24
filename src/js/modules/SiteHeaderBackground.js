import $ from 'jquery';

const SiteHeaderBackground = {
    $siteHeader: $('.site-header'),

    init() {
        this._eventListeners();
        console.info('SiteHeaderBackground Initialized');
    },

    _eventListeners() {
        if (!$('body').hasClass('home')) {
            return;
        }

        $(window).on('scroll load', function () {
            if ($(window).scrollTop() > 100) {
                SiteHeaderBackground._show();
            } else {
                SiteHeaderBackground._hide();
            }
        });
    },

    _hide() {
        SiteHeaderBackground.$siteHeader.removeClass(
            'site-header--has-background'
        );
    },

    _show() {
        SiteHeaderBackground.$siteHeader.addClass(
            'site-header--has-background'
        );
    },
};

export default SiteHeaderBackground;
