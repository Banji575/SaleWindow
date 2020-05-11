import checkNumInput from './checkNumInput';

const forms = (formState) => {
    checkNumInput('input[name="user_phone"]')

    const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');

    const message = {
        waitMessage: 'Заявка отправляется',
        sendMessage: 'Заявка принята',
        errorMessage: 'Что-то пошло не так'
    }

    const post = async (url, data) => {
        const messageDiv = document.querySelector('.status').textContent = message.waitMessage;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        })
        return await res.text();
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const data = new FormData(item);
            if(item.getAttribute('data-calc')){
                console.log('data-calc')
                for(let key in formState){
                    data.append(key, formState[key])
                   
                }
            }

            post('http://localhost:3000/', data)
                .then(res => {
                    console.log(res)
                })
                .then(() => {
                    document.querySelector('.status').textContent = message.sendMessage;
                    input.forEach(item => {
                        item.value = '';
                    })
                })
                .catch((e) => {
                    document.querySelector('.status').textContent = message.errorMessage;
                })

        })
    })


}

export default forms;