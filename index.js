
const setAlarm = (event) => {
    event.preventDefault()
    let timeInput = Number(document.querySelector('.time-input').value)
    let timeInputSec = (timeInput * 60)
    let alarmMin = document.querySelector('.alarm__minutes')
    let alarmSec = document.querySelector('.alarm__seconds')
    let myAlarm = document.querySelector('.alarm')
    let myAudio = document.querySelector('.audio')
    alarmMin.textContent = String(timeInput).padStart(2, '0')
    alarmSec.textContent = '00'

    const deduct = () => {
        if (timeInputSec > 0) {
            timeInputSec = (timeInputSec - 1)
            let minutes = Math.trunc(timeInputSec / 60)
            let seconds = (timeInputSec % 60)
            alarmMin.textContent = String(minutes).padStart(2, '0')
            alarmSec.textContent = String(seconds).padStart(2, '0')
        } else if (timeInputSec <= 0) {
            clearInterval(timerId)
            myAlarm.classList.add('alarm--ring')
            myAudio.play()
        }
    }
    const timerId = setInterval(deduct, 1000)
}

let formular = document.querySelector('.controls')
formular.addEventListener('submit', (event) => setAlarm(event))



