import 'sharer.js';
import $ from 'jquery';

const Share = {
    init() {
        this._eventListeners();
        console.info('Share Initialized');
    },

    _eventListeners() {
        $('[data-sharer]').on('click', function (e) {
            e.preventDefault();
        });
    },
};

export default Share;
