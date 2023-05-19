
const Clientes = ["Mesa1", "Mesa2", "Mesa3", "Zona Roja", "Zona Verde"];

let text = "";
for (let i = 0; i < Clientes.length; i++) {
    text += Clientes[i] + "<br>";
}

document.getElementById("mesas").innerHTML = text;


function mostrarMensaje() {
    var numero = parseInt(document.getElementById("numero").value)
    //alert(`esto es una prueba ${numero}`)

    if (numero == 10)
        document.getElementById("resultado").innerHTML = "Mesas Disponibles de la 1 a la 3"

    else if (numero > 10 && numero < 25) {
        document.getElementById("resultado").innerHTML = "Pasen a la zona VERDE"
    }
    else if (numero > 25 && numero < 30) {
        document.getElementById("resultado").innerHTML = "Pasen a la zona ROJA"
    }
    else {
        document.getElementById("resultado").innerHTML = "No hay mesas disponibles"
    }

}
