import $ from 'jquery';

const Videos = {
    init() {
        this._eventListeners();
        console.info('Videos Initialized');
    },

    _eventListeners() {
        $('.media__video-play').on('click', function (e) {
            e.preventDefault();
            const thisIframe = $(this).parent();
            Videos._play(thisIframe);
        });
    },

    _play($video) {
        const iframeSource = $video.find('.media__iframe').data('src');
        $video.addClass('playing');
        $video.find('.media__iframe').attr('src', iframeSource);
    },
};

export default Videos;
