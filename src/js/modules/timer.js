const timer = (id, deadline) => {


    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date())

        const targetTime = {
            seconds: Math.floor((t / 1000) % 60),
            minutes: Math.floor((t / 1000 / 60) % 60),
            hours: Math.floor((t / (1000 * 60 * 60)) % 24),
            days: Math.floor((t / (1000 * 60 * 60 * 24)))
        };
        return targetTime;
    }

    const checkTwoNumber = (number) => {
        if (number <= 9) {
            return '0' + number
        }
        return number
    }

    const updateTime = (...arg) => {
        const time = getTimeRemaining(deadline)
        arg.forEach((item, i) => {
            item.textContent = checkTwoNumber(time[item.getAttribute('id')])
        })
    }

    const timerInterval = (arg) => {
        setInterval(() => {
            updateTime(arg)
        }, 1000)
    }

    const setTimer = () => {
        const selector = document.querySelector(id),
            secondTimer = selector.querySelector('#seconds'),
            minutesTimer = selector.querySelector('#minutes'),
            hoursTimer = selector.querySelector('#hours'),
            daysTimer = selector.querySelector('#days')
        updateTime(secondTimer, minutesTimer, hoursTimer, daysTimer)
        timerInterval(secondTimer, minutesTimer, hoursTimer, daysTimer)

    }

    setTimer()
}

export default timer;