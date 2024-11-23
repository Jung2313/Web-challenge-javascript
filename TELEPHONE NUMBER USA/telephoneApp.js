const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")


const telephoneUsValidation = (nums) => {
    const regex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/
    return regex.test(nums)
}

const createElement = () => {
    let userInputValue = userInput.value.trim();
    let pElement = document.createElement("p")
    pElement.className = "results-text"

    if (telephoneUsValidation(userInputValue)) {
        pElement.textContent = `Valid Us Number: ${userInputValue}`
        pElement.style.color = 'rgb(0,71,27)'
    }
    else {
        pElement.textContent = `Invalid Us Number: ${userInputValue}`
        pElement.style.color = 'rgb(77,56,0)'
    }
    results.appendChild(pElement)
}

const validation = () => {
    let userInputValue = userInput.value.trim();
    if (userInputValue == "") {
        alert("Please provide a phone number")
    }
    else {
        createElement()
    }
    userInput.value = ""
}

checkBtn.addEventListener("click", validation)

//Para detectar el enter
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        validation()
    }
});

//Elimina todos los elementos hijos.
const clearResults = () =>{
    results.innerHTML = ""
}
clearBtn.addEventListener("click", clearResults)
