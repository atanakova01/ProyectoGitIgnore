/*Nombre y apellidos: Alena Tanakova*/
/*Grupo: DAW2*/

import { calcularIMC, clasificaIMC, diasHastaCumple, fraseMotivacional, mostrarTamañoVentana } from "./funciones_ejercicioExtra.js";

document.addEventListener("DOMContentLoaded", () => {

    var salida = document.getElementById("salida");
    var salidaError = document.getElementById("error");

    function validarFecha(fechaNacimiento) { /*A la función se pasa la fecha en formato cadena*/
            var partesSeparadas = []; /*Se crea un array en el que se guardarán el año, el mes y el día por separado*/
            var fecha = null; /*Se inicializa la variable en la que se creará el objeto Date que se va a crear con los elementos del array*/
            
            if (fechaNacimiento.includes("-")) { /*Si la cadena tiene "-" como separador*/
                partesSeparadas = fechaNacimiento.split("-"); /*Se separa y sus partes se guardan en el array*/
                fecha = new Date(partesSeparadas[0], partesSeparadas[1] - 1, partesSeparadas[2]); /*Se crea el objeto Date con los elementos del array en la variable creada antes*/
                return fecha; /*La función devuelve la fecha como objeto Date*/
            }
            return null; /*Si la cadena inicial no contiene "-" como separador, se devuelve un null*/
        }

    document.getElementById("btnCalcular").onclick = () => {

        salida.innerHTML = "";

        if (document.getElementById("nombre").value.trim() === "") { /*Si el input del nombre está vacío*/
            salida.innerHTML = "";
            salidaError.innerHTML = "ERROR: No has introducido el nombre" + "<br>";
            return;
        } else {
            salidaError.innerHTML = "";
        }

        if (document.getElementById("peso").value.trim() ==="") { /*Si el input del peso está vacío*/
            salida.innerHTML = "";
            salidaError.innerHTML += "ERROR: No has introducido el peso" + "<br>";
            return;
        } else if (isNaN(document.getElementById("peso").value)) { /*Si el valor del peso no es numérico*/
            salida.innerHTML = "";
            salidaError.innerHTML += "ERROR: El peso que has introducido no es válido" + "<br>";
            return;
        } else {
            salidaError.innerHTML = "";
        }

        if (document.getElementById("estatura").value.trim() === "") { /*Si el input de la estatura está vacío*/
            salida.innerHTML = "";
            salidaError.innerHTML = "ERROR: No has introducido la estatura" + "<br>";
            return;
        } else if (isNaN(document.getElementById("estatura").value)) { /*Si el valor de la estatura no es numérico*/
            salida.innerHTML = "";
            salidaError.innerHTML = "ERROR: La estatura que has introducido no es válida" + "<br>";
            return;
        } else {
            salidaError.innerHTML = "";
        }

        if (!document.getElementById("fechaNacimiento").value) { /*Si el input de la fecha está vacío*/
            salida.innerHTML = "";
            salidaError.innerHTML = "ERROR: No has introducido la fecha de nacimiento";
            return;
        } else {
            salidaError.innerHTML = "";
        }

        /*Los valores de los input se guardan en las variables correspondientes*/
        var nombre = document.getElementById("nombre").value;
        var peso = document.getElementById("peso").value;
        var estatura = document.getElementById("estatura").value;
        /*Las variables IMC y clasificaciónIMC se inicializan con las funciones correspondientes*/
        var imc = calcularIMC(peso, estatura);
        var clasificacionIMC = clasificaIMC(imc);

        var fechaNacimiento = document.getElementById("fechaNacimiento").value; /*El valor de la fecha también se recoge y se guarda en una variable*/

        var fNacimiento = validarFecha(fechaNacimiento); /*La cadena se convierte a un objeto Date*/
        if (!fNacimiento) { /*Si el objeto es nulo*/
            salida.innerHTML = "";
            salidaError.innerHTML = "ERROR: La fecha no es válida";
            return; /*Se sale del onclick*/
        }
        var dias = diasHastaCumple(fNacimiento); /*El objeto Date se pasa a la función diasHastaCumple, la función se ejecuta, su resultado se guarda en una variable*/
        var frase = fraseMotivacional();

        salidaError.innerHTML = ""; /*Se limpian todos los errores si ya no quedan*/
        /*Se escribe la salida*/
        salida.innerHTML += "Hola " + nombre + "<br>" + "<br>";
        salida.innerHTML += "Tu IMC es " + imc + " => " + clasificacionIMC + "<br>";
        if (dias === 365 || dias === 366 || dias === 0) {
            salida.innerHTML += "Hoy es tu cumpleaños, ¡felicidades!" + "<br>";
        } else {
            salida.innerHTML += "Faltan " + dias + " días para tu próximo cumpleaños" + "<br>";
        }
        
        salida.innerHTML += "'" + frase + "'" + "<br>" + "<br>";
        //MODIFICACIÓN PARA LA PRUEBA
        salida.innerHTML += "Tamaño actual de la ventana (en píxeles): " + mostrarTamañoVentana();
        //He añadido las palabras "(en píxeles)" en la parte textual de la salida
    }
});