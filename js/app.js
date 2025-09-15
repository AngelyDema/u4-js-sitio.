// Declarar constantes
const APP_NOMBRE = "Blue Bank";
const APP_VERSION = "1.0.0";
const ANIO = new Date().getFullYear();

//Declarar con let
let contadorVisitas = 0;
let usuarioActivo = false;
let esMovil;

//Declarar funciones
function sumar(a, b) {
a;
b;
    return a + b;
}

function multiplicar(a, b) {
    return a*b;
}

//Mensaje de bienvenida
function mostrarBienvenida() {
  const salida = document.getElementById("salida");
  if (salida) {
    const saludo = `Bienvenido a ${APP_NOMBRE}`;
    salida.textContent = saludo;
  } else{
    console.warn("Elemento con id 'salida' no encontrado.");
  }
}



//Contador de visitas 
function inicializarContadorVisitas() {
  contadorVisitas = Number(localStorage.getItem("contadorVisitas")) || 0;
  actualizarContadorVisitas();
}

function actualizarContadorVisitas() {
  const totalVisitas = document.getElementById("totalVisitas");
  if (totalVisitas) {
    totalVisitas.textContent = `Visitas: ${contadorVisitas}`;
  }
}

const btnVisitas = document.getElementById("btnVisitas");
if (btnVisitas) {
  btnVisitas.addEventListener("click", () => {
    contadorVisitas++;
    localStorage.setItem("contadorVisitas", contadorVisitas);
    actualizarContadorVisitas();
  });
}



//Función mostrarHora

function mostrarHora() {
const reloj = document.getElementById("reloj");
if (!reloj) return;
setInterval(() => {
const ahora = new Date();
reloj.textContent = ahora.toLocaleTimeString();
}, 1000);
}



//Navegación activa (date-page y activo)
function activarNavegacion() {
const currentPage = document.body.dataset.page;
if (!currentPage) return;
const enlaces = document.querySelectorAll("nav a[data-page]");
enlaces.forEach(enlace => {
    if (enlace.dataset.page === currentPage) {
    enlace.classList.add("activo");
    }
    else {
    enlace.classList.remove("activo");
    }
});
}

// DOM básico: cambio color con botones
function inicializarCambiarColor() {
  const btnRojo = document.getElementById("btnRojo");
  const btnVerde = document.getElementById("btnVerde");
  const btnAzul = document.getElementById("btnAzul");
  const btnDefecto = document.getElementById("btnDefecto");
  const cuerpo = document.body;

  if(btnRojo) btnRojo.addEventListener("click", () => cuerpo.style.backgroundColor = "red");
  if(btnVerde) btnVerde.addEventListener("click", () => cuerpo.style.backgroundColor = "green");
  if(btnAzul) btnAzul.addEventListener("click", () => cuerpo.style.backgroundColor = "blue");
  if(btnDefecto) btnDefecto.addEventListener("click", () => cuerpo.style.backgroundColor = "white");
}

// DOM avanzado: lista de notas con validación //MIRAR HTML
function inicializarNotas() {
  const formNotas = document.getElementById("formNotas");
  const listaNotas = document.getElementById("listaNotas");
  const inputNota = document.getElementById("inputNota");

  if (!formNotas || !listaNotas || !inputNota) return;

  formNotas.addEventListener("submit", e => {
    e.preventDefault();
    const texto = inputNota.value.trim();
    if(texto === "") {
      alert("La nota no puede estar vacía.");
      return;
    }
    const li = document.createElement("li");
    li.textContent = texto;
    listaNotas.appendChild(li);
    inputNota.value = "";
  });
}


// Validación formulario contacto con mensajes de error y éxito 
function inicializarValidacionContacto() {
  const formContacto = document.getElementById("formContacto");
  if (!formContacto) return;


  formContacto.addEventListener("submit", e => {
    e.preventDefault();
    const email = formContacto.email;
    const nombre = formContacto.nombre;
    const mensaje = formContacto.mensaje;

    let valid = true;

    // Limpieza previa
    formContacto.querySelectorAll(".mensaje-error").forEach(m => m.style.display = "none");
    
    if(!email.value || !email.validity.valid){
      mostrarError(email, "Email no válido");
      valid = false;
    }
    if(!nombre.value.trim()){
      mostrarError(nombre, "Nombre requerido");
      valid = false;
    }
    if(!mensaje.value.trim()){
      mostrarError(mensaje, "Mensaje requerido");
      valid = false;
    }

    if(valid){
      alert("Formulario enviado con éxito!");
      formContacto.reset();
    }
  });

  function mostrarError(input, msg) {
    const errorDiv = input.nextElementSibling; // Asumiendo sigue el div mensaje-error
    if(errorDiv && errorDiv.classList.contains("mensaje-error")){
      errorDiv.textContent = msg;
      errorDiv.style.display = "block";
    }
  }
}

// Buscador en servicios.html con coincidencias en tiempo real
function inicializarBuscador() {
  const inputBuscar = document.getElementById("inputBuscar");
  const listaServicios = document.getElementById("listaServicios");
  if(!inputBuscar || !listaServicios) return;

  inputBuscar.addEventListener("input", () => {
    const texto = inputBuscar.value.toLowerCase();
    Array.from(listaServicios.children).forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(texto) ? "block" : "none";
    });
  });
}

// Función evaluarNumero(n) con if/else
function evaluarNumero(n) {
  if(n > 0) return "Positivo";
  else if(n < 0) return "Negativo";
  else return "Cero";
}

// Función obtenerDia(numero) con switch
function obtenerDia(numero) {
  switch(numero) {
    case 1: return "Lunes";
    case 2: return "Martes";
    case 3: return "Miércoles";
    case 4: return "Jueves";
    case 5: return "Viernes";
    case 6: return "Sábado";
    case 7: return "Domingo";
    default: return "Número inválido";
  }
}

// Renderizar perfil en acerca.html usando template string
function renderizarPerfil() {
  const contenedor = document.getElementById("perfil");
  if(!contenedor) return;

  const perfilHtml = `
    <h3>${APP_NOMBRE}</h3>
    <p>Versión: ${APP_VERSION}</p>
    <p>Año actual: ${ANIO}</p>
    <p>Bienvenido a la página Acerca de ${APP_NOMBRE}.</p>
  `;

  contenedor.innerHTML = perfilHtml;
}

// Clase Util con método formatearMoneda()
class Util {
  static formatearMoneda(valor, moneda = "USD") {
    return new Intl.NumberFormat('es-ES', {style: 'currency', currency: moneda}).format(valor);
  }
}

//Inialización de la we

function initApp() {
  mostrarBienvenida();
  inicializarContadorVisitas();
  mostrarHora();
  activarNavegacion();
  inicializarCambiarColor();
  inicializarNotas();
  inicializarValidacionContacto();
  inicializarBuscador();
  renderizarPerfil();
}

document.addEventListener("DOMContentLoaded", initApp);

