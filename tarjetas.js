
function crearTarjetas() {
    let contenido = "";
    let divContenedor = document.getElementById("cmpContenedor");
    let desde = parseInt(document.getElementById("txtDesde").value);
    let hasta = parseInt(document.getElementById("txtHasta").value);
    let salto = parseInt(document.getElementById("txtSalto").value);

    for (let i = desde; i <= hasta; i += salto){
        contenido += "<div class='item'>" + i + "</div>";
        console.log(contenido);
    }
    divContenedor.innerHTML = contenido;
}