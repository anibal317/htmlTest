const contador = document.getElementById("contador")
const btnSumar = document.getElementById("btnSumar")
const btnRestar = document.getElementById("btnRestar")

btnSumar.addEventListener("click", () => {
    contador = contador + 1
})

btnRestar.addEventListener("click", () => {
    contador = contador - 1
})
