var boton= document.querySelector("button");
var mensaje= document.querySelector("p");
boton.addEventListener("click",CambiarEstado);
function CambiarEstado(){
    if(boton.textContent=== "Encender Luz"){
        boton.textContent= "Apagar Luz";
        mensaje.textContent= "Luz Encendida";
    }else{
        boton.textContent= "Encender Luz";
        mensaje.textContent= "Luz Apagada";
    }
}