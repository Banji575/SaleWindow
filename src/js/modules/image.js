const image = () => {
    const imageBlock = document.querySelector('.works'),
        imagePopup = document.createElement('div'),
        bigImg = document.createElement('img')
    bigImg.style.margin = '0 auto';



    imagePopup.classList.add('popup');

    imageBlock.addEventListener('click', (e) => {

        const target = e.target;
        if (target && target.classList.contains('preview')) {
            e.preventDefault();

            const bigImageUrl = target.parentNode.getAttribute('href')
            imagePopup.style.display = 'flex'
            imageBlock.appendChild(imagePopup);
            bigImg.setAttribute('src', bigImageUrl);
            imagePopup.appendChild(bigImg);
        }

        if (target && target.matches('div.popup')) {
            imagePopup.style.display = 'none'
        }
    })
}

export default image;