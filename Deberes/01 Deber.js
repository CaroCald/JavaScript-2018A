/*
DEBER 01 JAVASCRIPT
CAROLINA CALDERON
1. Ejercicio
Crear una función en JavaScript que acepte como parámetro un arreglo.
El nombre de la función será "validarNumeroDeStringsEnArreglo".
El nombre del parámetro de la función será "arreglo".
La función va a devolver un resultado que será el número total de "strings" que se encuentren en el arreglo.
 */
var arrayString;
var validarNumerdDeStringsEnArreglo = /** @class */ (function () {
    function validarNumerdDeStringsEnArreglo(arrayString) {
        this.arregloDeStrings = arrayString;
    }
    validarNumerdDeStringsEnArreglo.prototype.imprimirEnConsola = function () {
        console.log("la long del arreglo es " + this.arregloDeStrings.length);
    };
    return validarNumerdDeStringsEnArreglo;
}());
var arregloPrueba = new validarNumerdDeStringsEnArreglo(['A', 'B', 'C', 'D']);
console.log(arregloPrueba.imprimirEnConsola());
