import $ from 'jquery';

const MobileMenu = {
    init() {
        this.eventListeners();
        console.info('MobileMenu Initialized');
    },

    eventListeners() {
        $('.hamburger-menu-button').on('click', function () {
            MobileMenu.toggleBodyClass();
        });

        $('.main-menu__item--has-children > a').on('click', function (e) {
            if (
                !$(this).hasClass('is-active') &&
                $(window).outerWidth() <= 1200
            ) {
                e.preventDefault();
                $(this).addClass('is-active');
                $(this).parent().find('.main-menu__sub-items').slideDown();
            }
        });
    },

    toggleBodyClass() {
        $('body').toggleClass('hamburger-menu-active');
    },
};

export default MobileMenu;
