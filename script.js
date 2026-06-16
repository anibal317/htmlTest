const btnSend = document.getElementById("btnSend")
const result = document.getElementById("result")
const code = document.getElementById("code")
code.value="Saludos"

btnSend.addEventListener("click", () => {
    result.innerText="TEST"
})