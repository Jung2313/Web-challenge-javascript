const inputNumber = document.getElementById("number");
const outputNumber = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn")
const outContent = document.querySelector(".output-wrap")


convertBtn.addEventListener("click", () => {
    if (!inputNumber.value.trim()) {
        outputNumber.textContent = "Please enter a valid number";
        outContent.classList.add("error-message")
        outputNumber.style.color = "#76020d"
    }
    else if (inputNumber.value <= 0) {
        outputNumber.textContent = "Please enter a number greater than or equal to 1"
        outContent.classList.add("error-message")
        outputNumber.style.color = "#76020d"
    }
    else if (inputNumber.value >= 4000) {
        outputNumber.textContent = "Please enter a number less than or equal to 3999"
        outContent.classList.add("error-message")
        outputNumber.style.color = "#76020d"
    }
    else {
        outContent.classList.remove("error-message")
        outputNumber.style.color = "#ffff"
        outputNumber.innerHTML = arabicToRoman(inputNumber.value)
    }


})

const arabicToRoman = (num) => {
    let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    const map = new Map();
    for (let i = 0; i < arabic.length; i++) {
        map.set(arabic[i], romans[i])
    }
    let reverse = ""
    for (let [arabicValue, romansValue] of map) {
        while (num >= arabicValue) {
            num -= arabicValue
            reverse += romansValue
        }
    }

    return reverse
}
