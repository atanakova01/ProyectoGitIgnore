/*Nombre y apellidos: Alena Tanakova*/
/*Grupo: DAW2*/

export function calcularIMC(peso, estatura) {
    if (isNaN(peso) || isNaN(estatura)) { /*Se comprueba si el peso y altura pasados por parámetros son números*/
        document.getElementById("salida").innerHTML = ""; /*La salida normal se limpia*/
        document.getElementById("error").innerHTML = "ERROR: El peso o la estatura que has introducido no son válidos"; 
        return null; /*Se devuelve un null si no son valores numéricos*/
    } else {
        peso = parseFloat(peso); /*Tanto el peso como la estatura se convierten de string a float*/
        estatura = parseFloat(estatura);
        var imc = peso / Math.pow(estatura, 2);
    }
    return imc.toFixed(2); /*El IMC se devuelve con dos decimales*/
}

export function clasificaIMC(imc) {
    if (isNaN(imc)) {
        document.getElementById("salida").innerHTML = "";
        document.getElementById("error").innerHTML += "ERROR: El IMC no es válido";
        return ""; /*Se devuelve una cadena vacía si el IMC no es numérico*/
    } else {
        if (imc < 18.5) {
            return "Bajo peso"; /*La función devuelve un mensaje correspondiente a la condición*/
        } else if (imc >= 18.5 && imc <=24.9) {
            return "Normal";
        } else if (imc >= 25 && imc <= 29.9) {
            return "Sobrepeso";
        } else {
            return "Obesidad";
        }
    }
}

export function diasHastaCumple(fechaNacimiento) {
    const fechaActual = new Date(); /*Se crea un objeto Date con la fecha actual*/
    /*Se obtienen el año actual, el mes del cumpleaños y el dia del cumpleaños*/
    const añoActual = fechaActual.getFullYear();
    const mesCumple = fechaNacimiento.getMonth();
    const diaCumple = fechaNacimiento.getDate();

    const proximoCumple = new Date(añoActual, mesCumple, diaCumple); /*Se obtiene la fecha del próximo cumpleaños con los parámetros obtenidos anteriormente*/

    if (proximoCumple < fechaActual) { /*Si el cumpleaños ya ha pasado este año*/
        proximoCumple.setFullYear(añoActual + 1); /*El año en el próximo cumpleaños se cambia por el siguiente*/
    }

    var diferencia = proximoCumple.getTime() - fechaActual.getTime(); /*Se calcula la diferencia en milisegundos entre el próximo cumple y la fecha actual*/
    var difDias = Math.ceil(diferencia / (1000*60*60*24)); /*Milisegundos se convierten a días*/

    return difDias; /*Se devuelve la diferencia en días*/
}

export function fraseMotivacional() {
    /*Se crea un array de cadenas con frases motivacionales*/
    var frasesMotivacionales = [
        "Mente sana en cuerpo sano.",
        "Cuida de tu cuerpo; es el único lugar que tienes para vivir.",
        "El cuerpo es nuestro jardín, la voluntad es nuestro jardinero.",
        "La mejor medicina es un ánimo gozoso."
    ];

    var fraseAleatoria = Math.floor(Math.random() * frasesMotivacionales.length); /*Se elige una posición aleatoria en este array*/

    return frasesMotivacionales[fraseAleatoria]; /*Se devuelve la frase que está en la posición aleatoria en el array*/
}

export function mostrarTamañoVentana() {
    var ancho = window.innerWidth; /*Se mide el ancho de la ventana en píxeles*/
    var alto = window.innerHeight; /*Se mide el alto de la ventana en píxeles*/
    return alto + "x" + ancho; /*La tarea dice que la función tiene que devolver un undefined, pero no sé cómo mostrarlo en este caso, por eso hago un return*/
}