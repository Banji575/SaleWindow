import './slider';
import modal from './modules/modals';
import tap from './modules/tap';
import forms from './modules/forms';
import changeState from './modules/changeState';
import timer from './modules/timer'
import image from './modules/image'
window.addEventListener('DOMContentLoaded', () => {

    const modalState = {};
    const deadLine = '2020-06-01'
    image();
    changeState(modalState);
    timer('.container1', deadLine);
    modal();
    tap('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tap('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tap('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block')
    forms(modalState);
})