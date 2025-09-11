// Declarar constantes
const APP_NOMBRE = "Blue Bank";
const APP_VERSION = "1.0.0";
const ANIO = new Date().getFullYear();

//Declarar con let
let contadorVisitas;
let usuarioActivo = false;
let esMovil;

//Declarar funciones
function sumar(a, b) {
    let a;
    let b;
    return a + b;
}

function multiplicar(a, b) {
    let a;
    let b;
    return a*b;
}

//Mensaje de bienvenida
function mostrarBienvenida() {
    const salida = document.getElementById("salida"); //Todavia no defino el elemento con ID salida
    if (salida) {
    const saludo = `Bienvenido a ${APP_NOMBRE} - Versión ${APP_VERSION} (${ANIO})`;
    salida.textContent = saludo;
    }
}