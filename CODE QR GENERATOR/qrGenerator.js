const qrGeneratorDiv = document.querySelector(".qr-code");
const input = document.querySelector(".input-target");
const enviarbtn = document.querySelector(".enviar");
let clearQrbtn = false;

function qrCode() {
const qr = new QRCode(qrGeneratorDiv)
    qr.makeCode(input.value)
}
enviarbtn.addEventListener("click", () => {
    let inputValue = input.value.trim()
    if (inputValue && !clearQrbtn) {
        qrGeneratorDiv.innerHTML = ""
        qrCode()
        qrGeneratorDiv.style.display = "block"
        clearQrbtn = true
    }
    else if (clearQrbtn) {
        qrGeneratorDiv.innerHTML = ""
        qrCode()
        clearQrbtn = false;
    }
    input.value = ""
})
