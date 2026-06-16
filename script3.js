const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const btn = document.getElementById("btnCalcular")
const resultado = document.getElementById("resultado")

btn.addEventListener("click", () => {
    // ❌ ERROR: .value devuelve un string, el operador + concatena en vez de sumar
    // resultado.textContent = num1.value + num2.value

    // ✅ SOLUCIÓN: convertir los valores a número con Number() antes de sumar
    let suma = Number(num1.value) + Number(num2.value)
    resultado.textContent = suma
})
