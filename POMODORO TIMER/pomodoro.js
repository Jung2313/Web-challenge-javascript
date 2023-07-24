const startTimer = document.querySelector(".start-timer");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const timerMinutes = document.querySelector(".time-final-minutes");
const timerSecond = document.querySelector(".second")
const time = document.querySelector(".time");
const btnStartPomoModal = document.querySelector(".btn-start-pomo");
const btnCancelPomoModal = document.querySelector(".btn-cancel-pom");
const cancel = document.querySelector(".cancel-pomo");
const restart = document.querySelector(".restart-pomo");
const timewrap = document.querySelector(".time-wrap")

let numberIncrease = 10;
let intervalTimer;
let timeLeft = numberIncrease * 60
increase.addEventListener("click", () => {
    if (numberIncrease !== 180) {
        numberIncrease += 5
    }
    time.innerHTML = numberIncrease
    timerMinutes.innerHTML = numberIncrease

    timeLeft = numberIncrease * 60
})

decrease.addEventListener("click", () => {
    if (numberIncrease !== 10) { //10mins limit
        numberIncrease -= 5
    }
    time.innerHTML = numberIncrease
    timerMinutes.innerHTML = numberIncrease
    timeLeft = numberIncrease * 60
})

function myTime() {
    let minutes = Math.floor((timeLeft) / 60)
    let second = (timeLeft) % 60
    timerMinutes.innerHTML = timeFormat(minutes)
    timerSecond.innerHTML = timeFormat(second)

    if (timeLeft === 0) {
        clearInterval(intervalTimer)
    }
    timeLeft--

}

function timeFormat(time) {
    return time < 10 ? "0" + time : time;
}

startTimer.addEventListener("click", () => {
    intervalTimer = setInterval(myTime, 1000)
    timewrap.style.display = "none";
    btnStartPomoModal.style.display = "none"
    btnCancelPomoModal.classList.add("appear-btn")
})

cancel.addEventListener("click", () => {
    clearInterval(intervalTimer)
})

function restartOption() {
    numberIncrease=10
    timerMinutes.innerHTML= numberIncrease
    time.innerHTML= numberIncrease
    timewrap.style.display = "block";
    btnStartPomoModal.style.display = "block"
    timerSecond.innerHTML="00"
   btnCancelPomoModal.classList.remove("appear-btn")
   clearInterval(intervalTimer)
}
restart.addEventListener("click",()=>{
    restartOption()
})