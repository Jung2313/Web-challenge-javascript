const time = document.querySelector(".time");
const moveSwitch = document.querySelector(".switch-content")
const smallhour = document.querySelector(".small")
let intervalFormatLong;
let intervalFomatShort;

//para 24h
function obtenerFullTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    let seconds = currentDate.getSeconds();
    if(hours > 12){
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds
    time.innerHTML = `${hours}:${m}:${s}` 
    smallhour.innerHTML = `PM`
    }
    else{
    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds
    time.innerHTML = `${h}:${m}:${s}` 
    smallhour.innerHTML = `AM`
    }
   
}

//para 12h
function obtenerMedioTime() {
    let current = new Date();
    let hours = current.getHours();
    let minutes = current.getMinutes();
    let seconds = current.getSeconds();
    if (hours > 12) {
        hours = hours % 12
        let h = hours < 10 ? "0" + hours : hours
        let m = minutes < 10 ? "0" + minutes : minutes
        let s = seconds < 10 ? "0" + seconds : seconds
        time.innerHTML = `${h}:${m}:${s}`
        smallhour.innerHTML = `PM`
    }
    else {
        let h = hours < 10 ? "0" + hours : hours
        let m = minutes < 10 ? "0" + minutes : minutes
        let s = seconds < 10 ? "0" + seconds : seconds
        time.innerHTML = `${h}:${m}:${s}`
        smallhour.innerHTML = `AM`

    }


}
//Also default
intervalFomatShort = setInterval(obtenerMedioTime, 1000)

moveSwitch.addEventListener("click", () => {
    let switche= moveSwitch.classList.contains("switchFormat")
    if(!switche){
        moveSwitch.classList.add("switchFormat")
        intervalFormatLong = setInterval(obtenerFullTime, 1000)
        clearInterval(intervalFomatShort)
    }
    else{
        intervalFomatShort = setInterval(obtenerMedioTime, 1000)
        clearInterval(intervalFormatLong)
        moveSwitch.classList.remove("switchFormat")
    }
})