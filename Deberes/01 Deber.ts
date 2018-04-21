/*
DEBER 01 JAVASCRIPT
CAROLINA CALDERON
1. Ejercicio
Crear una función en JavaScript que acepte como parámetro un arreglo.
El nombre de la función será "validarNumeroDeStringsEnArreglo".
El nombre del parámetro de la función será "arreglo".
La función va a devolver un resultado que será el número total de "strings" que se encuentren en el arreglo.
 */
let arrayString: string[];
class validarNumerdDeStringsEnArreglo{
    public arregloDeStrings:string[];
   constructor(arrayString:string[]){
       this.arregloDeStrings=arrayString;
   }
    public imprimirEnConsola(){
       console.log(`la long del arreglo es ${this.arregloDeStrings.length}`)
    }
}
let arregloPrueba: validarNumerdDeStringsEnArreglo = new validarNumerdDeStringsEnArreglo(['A', 'B', 'C', 'D']);
console.log(arregloPrueba.imprimirEnConsola());