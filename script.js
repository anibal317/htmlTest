const btnSend = document.getElementById("btnSend")
const result = document.getElementById("result")
const code = document.getElementById("code")
code.value='<p style="color: red;">Saludos</p>'
btnSend.addEventListener("click", () => {
    // ❌ ERROR: innerText muestra el texto literal, no interpreta etiquetas HTML
    // result.innerText=code.value

    // ✅ SOLUCIÓN: innerHTML interpreta el código HTML y lo renderiza
    result.innerHTML = code.value
})