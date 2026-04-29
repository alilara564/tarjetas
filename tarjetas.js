
function crearTarjetas() {
    //let contenedor = document.getElementById("cmpContenedor");
    //contenedor.innerHTML = "<h1>MODIFICANDO DIV</h1>";
    let contenido = "";
    let divContenedor = document.getElementById("cmpContenedor");
    for (let i = 1; i <= 9; i++) {
        contenido += "<div class='item'>" + i + "</div>";
        console.log(contenido);
    }
    divContenedor.innerHTML = contenido;
}