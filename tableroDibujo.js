window.addEventListener("load", actuar, false);

var pincelActivo = false;
var colorActivo;

function actuar() {
    posiblesColores()
    pintarCeldas()
}

//----------------------------------------------------------------------------------------------------------------//

function posiblesColores(){
    var listaColores = document.querySelectorAll('td')
    for (var i=0; i<6;i++){
       listaColores[i].addEventListener("click", establecerColor,false )
    }
 }

function pintarCeldas() {
    var zonaDibujo = document.getElementById('zonaDibujo')
    var tabla = document.createElement('table')
    tabla.id = "tablero"
    //creamos 50 filas
    for (var i = 0; i < 50; i++) {
        var tr = document.createElement('tr')
        //por cada fila, 50 casillas
        for (var f = 1; f < 50; f++) {
            var td = document.createElement('td')
            tr.appendChild(td)
            //Añadimos a cada celda un evento, en este caso se activará al pasar el ratón por encima
            td.addEventListener("mouseover", setColor, false)

        }
        tabla.appendChild(tr)
    }
    zonaDibujo.appendChild(tabla)
}

function estadoPincel() {
    var pincel = document.getElementById('pincel')
    if (!pincelActivo) {
      pincel.innerHTML = `Estado del Pincel: DESACTIVADO`
    }else{
        pincel.innerHTML = `Estado del Pincel: ACTIVADO`
    }
}

function establecerColor() {
    //controlamos que:
    //el color que está activo sea distinto al color previamente seleccionado
    if(colorActivo!=this.className){
    pincelActivo = true;
    colorActivo = this.className;
    //si el color seleccionado es el mismo que ya existía y el pincel estaba activo
    //desactivamos el pincel
    }else if(colorActivo==this.className && pincelActivo){
        pincelActivo=false
        
    //en caso de ser el mismo color pero el pincel YA estaba desactivado, lo activamos para seguir pintando
    }else if(colorActivo==this.className && !pincelActivo){
        pincelActivo = true;
    }
    estadoPincel()
}

function setColor() {
    if (pincelActivo && colorActivo != "") {
        this.className = colorActivo;
    }

}




