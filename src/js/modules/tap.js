const tap = (headerSelector, tapSelector, contentSelector, activClass, display = 'block') => {

    const header = document.querySelector(headerSelector),
        tap = document.querySelectorAll(tapSelector),
        content = document.querySelectorAll(contentSelector);



    const showTap = (i) => {
        content[i].style.display = display;
        tap[i].classList.add(activClass);
        console.log()
    }
    const hideTap = () => {
        content.forEach(item => {
            item.style.display = 'none'
        })
        tap.forEach(item => {
            item.classList.remove(activClass)
        })
    }

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&(target.classList.contains(tapSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tapSelector.replace(/\./, ''))))  {
            tap.forEach((item, index) => {
                if (target == item || target.parentNode == item) {
                    hideTap();
                    showTap(index)

                }

            })
        }
    })

}

export default tap;