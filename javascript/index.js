
// Precio inicial

const precio = 400000

// Selección de elementos

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

const botonMas = document.querySelectorAll("button")[0];
const botonMenos = document.querySelectorAll("button")[1];

// Estado inicial
let cantidad = 0;

// Mostrar precio inicial
precioSpan.innerHTML = precio;
totalSpan.innerHTML = 0;

// Evento botón +
botonMas.onclick = function () {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = cantidad * precio;
};
// Evento botón -
botonMenos.onclick = function () {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        totalSpan.innerHTML = cantidad * precio;
    }
};