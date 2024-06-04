const parrafo1 = document.querySelector("p");
parrafo1.addEventListener("click", ActualizarNombre);
function ActualizarNombre(params) {
    let nombre=prompt("ingrese un Nombre");
    parrafo1.textContent=("Jugador2:"+nombre)
}