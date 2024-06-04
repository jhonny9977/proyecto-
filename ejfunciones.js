/*function Saludo(){
   console.log("Hola! Buen dia");
    let mensaje=document.querySelector("p")
    var Respuesta="Hola! Buen dia";
    mensaje.textContent=Respuesta;
}*/

/*PARAMETROS MULTIPLES
function tablas(tabla, hasta){
    for (let i=0; i<=hasta; i++){
        console.log(tabla, "x",i,"=", tabla*i);
    }
}*/
/*PARAMETRO POR DEFECTO */
function tablas(tabla, hasta=10){
    for (let i=0; i<=hasta; i++){
        console.log(tabla, "x",i,"=", tabla*i);
    }
}