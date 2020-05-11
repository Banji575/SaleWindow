const modal = () => {
    const bindModal = (selectorTtrigger, selectorOpenModal, selectorCloseModal, modalCloseOverlay = true) => {
        const trigger = document.querySelectorAll(selectorTtrigger),
            openModal = document.querySelector(selectorOpenModal),
            closeModal = document.querySelector(selectorCloseModal),
            window = document.querySelectorAll('[data-modal]'),
            marginModal = calcScroll()


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                window.forEach(i => {
                    i.style.display = 'none'
                })

                openModal.style.display = 'block';
                document.body.style.overflow = 'hidden'
                document.body.style.marginRight = `${marginModal}px`
            })
        })

        closeModal.addEventListener('click', () => {
            window.forEach(item => {
                item.style.display = 'none'
            })

            openModal.style.display = 'none';
            document.body.style.overflow = ''
            document.body.style.marginRight = `0px`

        })

        openModal.addEventListener('click', (e) => {
            if (e.target === openModal && modalCloseOverlay) {
                window.forEach(item => {
                    item.style.display = 'none'
                })

                openModal.style.display = 'none';
                document.body.style.overflow = ''
                document.body.style.marginRight = `0px`

            }
        })
    }
    const timerPopup = (selector, timer) => {
        setInterval(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
            console.log('timer')
        }, timer);
    }

    const calcScroll = () => {
        const div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.backgroundColor = 'red'
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollHeight = div.offsetWidth - div.clientWidth;
        console.log(div.offsetWidth, div.clientWidth)
        div.remove();
        return scrollHeight;
    }




    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', false);
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    timerPopup('.popup', 60000)

}

export default modal;