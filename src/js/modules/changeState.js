import modal from "./modals";
import checkNumInput from './checkNumInput';

const changeState = (modalState) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeight = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('#view_type');
    const windowProfile = document.querySelectorAll('.checkbox');
    checkNumInput('#width')
    checkNumInput('#height')

    function bindActionToElem(element, event, prop) {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        modalState[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i == 0 ? modalState[prop] = 'Холодное' :  modalState[prop] ='Теплое';
                            element.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            modalState[prop] = item.value
                        }
                        break;
                    case 'SELECT':
                        modalState[prop] = item.value
                }
                console.log(modalState)
            })
        })
    };

    bindActionToElem(windowForm, 'click', 'form');
    bindActionToElem(windowHeight, 'input', 'Height');
    bindActionToElem(windowWidth, 'input', 'Width');
    bindActionToElem(windowType, 'change', 'Type');
    bindActionToElem(windowProfile, 'click', 'Profile');

};

export default changeState;