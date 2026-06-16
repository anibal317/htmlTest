const btnSend = document.getElementById("btnSend")
const result = document.getElementById("result")
const code = document.getElementById("code")
//code.value='<p style="color: red;">Saludos</p>'
code.value="sale?"
btnSend.addEventListener("click", () => {
    result.innerText=code.value
})