const contador = document.getElementById("contador")
const btnSumar = document.getElementById("btnSumar")
const btnRestar = document.getElementById("btnRestar")

btnSumar.addEventListener("click", () => {
    // ❌ ERROR: reasigna la variable contador (el elemento HTML) por un número
    // contador = contador + 1

    // ✅ SOLUCIÓN: leer el texto actual, convertirlo a número, sumar y actualizar .textContent
    let valor = Number(contador.textContent)
    valor++
    contador.textContent = valor
})

btnRestar.addEventListener("click", () => {
    // ❌ ERROR: mismo error, reasigna el elemento del DOM
    // contador = contador - 1

    // ✅ SOLUCIÓN: mismo enfoque pero restando
    let valor = Number(contador.textContent)
    valor--
    contador.textContent = valor
})


/**
Otra forma:
let resultado = 0

btnSumar.addEventListener("click", () => {
    resultado = resultado + 1
    contador.innerText = resultado
})

btnRestar.addEventListener("click", () => {
    resultado = resultado - 1
    contador.innerText = resultado

})

*/