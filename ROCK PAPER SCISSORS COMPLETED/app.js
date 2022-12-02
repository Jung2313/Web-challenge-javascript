const userOptions = document.querySelectorAll(".game");
const userChoice = document.querySelector(".user-choice");
const computerChoice = document.querySelector(".computer-choice");
const result = document.querySelector(".result")
let randomValue = ['rock', 'paper', 'scissors']
let userResult = "";
let computerRandomValue = ""


userOptions.forEach(item => {
    item.addEventListener("click", () => {
        userResult = item.dataset.serie
        userChoice.innerHTML = userResult
        computerRandom()
        matchBoth();
    })
})


const computerRandom = () => {
    computerRandomValue = randomValue[Math.floor(Math.random() * randomValue.length)]
    computerChoice.innerHTML = computerRandomValue;
}


const matchBoth = () => {
    switch (userResult + computerRandomValue) {
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            result.innerHTML = "You Lose"
            result.style.color="red"
            break;
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            result.innerHTML = "You Win"
            result.style.color="green"
            break;

        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            result.innerHTML = "It's a tie"
            result.style.color="blue"
            break;


    }
}