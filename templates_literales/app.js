"use strict";
function getNombre(nombre) {
    return nombre;
}
var nombre = "Rodrigo";
var apellido = "Salazar";
var edad = 28;
//template literal se utiliza para inicializar ``
//Antes del EC6
//var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
//después 
var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
var texto2 = " " + getNombre(nombre) + " ";
console.log(texto);
console.log(texto2);
