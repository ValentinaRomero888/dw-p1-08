"use strict";

/* TODO */
var precio;
var tasa;

const calcular = function () {
   
    do {
        precio = parseInt(prompt("Ingrese el precio del producto (sólo números mayores a 0"));
    } while (isNaN(precio) || precio <= 0);
   
   
    tasa = parseInt(prompt("Ingrese un monto de IVA mayor a 0 - Por defecto será 21%")) || 21;
 

    calcular2(precio, tasa);
};

const calcular2 = function (precio, tasa) {
    let iva = (precio * tasa) / 100;
    let precioTotal = precio + iva;

    document.getElementById("mensaje").innerHTML = `
    PRECIO: $${precio} <br>
    IVA ${tasa}%: $${iva} <br>
    PRECIO TOTAL: $${precioTotal}`;
};


// Corregir: No funciona Ingresando espacios entre los números
// Corregir: No funciona Ingresando comas o puntos para agregar centavos
// Corregir: Mejorar validación para que no moleste quedar atrapado en el do while
// Corregir: en tasa de iva si se ingresa una letra o un numero menor a 0 toma automaticamente el 21%