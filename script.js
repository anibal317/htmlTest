const btnSend = document.getElementById("btnSend")
const result = document.getElementById("result")
const code = document.getElementById("code")

btnSend.addEventListener("click",()=>{
result.innerText(code.value)
})