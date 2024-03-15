const input = document.getElementById("text-input")
const check = document.getElementById("check-btn")
const result = document.getElementById("result")

const isPalindrome = (word) => {
    let wordnoAlpha = "_,.()-/\| ";
    let word2 = "";
    let reverse = "";
    const map = new Map();
    for (let item of wordnoAlpha) {
        if (!map.has(item)) {
            map.set(item, 1)
        }
    }
    for (let i = 0; i < word.length; i++) {
        if (!map.has(word[i])) {
            word2 += word[i]
            reverse = word[i] + reverse
        }
    }

    return word2.toLowerCase() == reverse.toLowerCase()
        ? result.innerHTML = `<strong style="color:red">${input.value}</strong> is a palindrome`
        : result.innerHTML = `<strong style ="color:red">${input.value}</strong> is not a palindrome`

}

check.addEventListener("click", () => {

    if (input.value.trim() == "") {
        alert("Please input a value")
    }
    else {
        isPalindrome(input.value)
    }
    input.value = ""
})