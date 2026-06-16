const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const btn = document.getElementById("btnCalcular")
const resultado = document.getElementById("resultado")

btn.addEventListener("click", () => {
    resultado.textContent = num1.value + num2.value
})
