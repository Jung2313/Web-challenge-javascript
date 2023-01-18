const seconds = document.querySelector(".seconds")
const minutes = document.querySelector(".minutes")
const hours = document.querySelector(".hours");
const timeInterval = 6
const analogicClock = () => {
    let fecha = new Date();
    let horaCal = fecha.getHours() * 30
    let minCal = fecha.getMinutes() * timeInterval
    let secCal = fecha.getSeconds() * timeInterval

    hours.style.transform = `rotateZ(${horaCal + minCal/12}deg)`
    minutes.style.transform = `rotateZ(${minCal}deg)`
    seconds.style.transform = `rotateZ(${secCal}deg)`
}

setInterval(analogicClock, 1000)