const mainContent = document.querySelector(".main-content")
const container = document.querySelector(".container")
const secondContent = document.querySelector(".results-wrap")
let count = 0;
let score = 0;
let datos = 0;
document.addEventListener("DOMContentLoaded", () => {
    fetchApi(count)
})

const fetchApi = async (numbers) => {
    try {

        const resp = await fetch("/answers.json")
        const data = await resp.json()
        datos = data.length

        let li = `<section class="questions">
       <span class="number-id">${data[numbers].id}. <span class="question-sub">${data[numbers].question}</span></span>
       <button class="answers" data-ans="${data[numbers].options[0]}">${data[numbers].options[0]}</button> 
       <button class="answers" data-ans="${data[numbers].options[1]}">${data[numbers].options[1]}</button>
       <button class="answers" data-ans="${data[numbers].options[2]}">${data[numbers].options[2]}</button> 
      </section>`
        mainContent.innerHTML = li
        //para la respuesta y colocar el boton next
        let btnAnswers = document.querySelectorAll(".answers");
        btnAnswers.forEach(item => item.addEventListener("click", () => {
            if (item.dataset.ans === data[numbers].answer) {
                creatingDiv()
                score++
            }
            else {
                creatingDiv()
            }
        }))
    }

    catch {
        console.log("error")
    }

}
const creatingDiv = () => {
    const sectionContainer = document.createElement("section")
    const btnSection = document.createElement("button")
    btnSection.classList.add("next")
    btnSection.innerHTML = "Next"
    sectionContainer.classList.add("nextbtn")
    container.appendChild(sectionContainer)
    sectionContainer.appendChild(btnSection)
    let btnAnswers = document.querySelectorAll(".answers");
    btnAnswers.forEach(item => item.disabled = true)
    nextBotton()

}

const nextBotton = () => {
    let nextBtn = document.querySelector(".next");
    let delite = document.querySelector(".nextbtn")
    nextBtn.addEventListener("click", () => {
        if (count + 1 < datos) {
            count++
            fetchApi(count)
            delite.parentNode.removeChild(delite)
        }
        else {
            finalResults()
        }

    })
}

//Segundo Div and final results
const finalResults = () => {
    container.style.display = "none"
    secondContent.style.display = "block"
    let finalDiv = `<div class="results">
    <p>You scored <span class="result-init">${score}</span> out of <span class="total">${datos}</span></p>
    <button class="restart" onclick="playAgain()">Play Again</button>
    </div>`
    secondContent.innerHTML = finalDiv
}

const playAgain = () => {
    let delite = document.querySelector(".nextbtn")
    delite.parentNode.removeChild(delite)
    count = 0;
    score = 0;
    container.style.display = "block"
    secondContent.style.display = "none"
    fetchApi(count)
}