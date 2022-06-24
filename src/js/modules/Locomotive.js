import LocomotiveScroll from 'locomotive-scroll';
// import $ from 'jquery';

const Locomotive = {
    init() {
        new LocomotiveScroll({
            el: document.querySelector('body'),
            smooth: true,
        });
        console.info('Locomotive Initialized');

        // $('.site-footer__logo').on('load', function () {
        //     console.log('sdads');
        //     // locomotiveInstance.update();
        // });
    },
};

export default Locomotive;
