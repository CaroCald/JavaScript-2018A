var nombre = "28";
var edad = 28;
var fecha = new Date();
var casado = false; //true
var casa= undefined;

console.log(casa?"verdadero": "falso"); // da falso
if(casa){
    console.log("Verdadero");
}else{
    console.log("Falso")
}
var carro =null;
console.log(carro?"verdadero": "falso"); // falso
var arreglo = [];
console.log(arreglo?"verdadero": "falso"); // verdadero

console.log(1?"verdadero": "falso"); // verdadero
console.log(0?"verdadero": "falso");

console.log(fecha);
if (nombre === edad) {
    console.log("Verdadero")
} else {
    console.log("Falso")
}
function SumarDosNumeros(numeroUno, numeroDos) {
    return numeroDos+numeroDos;
};
//console.log(SumarDosNumeros(1,2));
//otra forma de crear funciones
var sumarDosNumeros2 = function SumarDosNumeros(numeroUno, numeroDos) {
    return numeroDos+numeroDos;
};
console.log(sumarDosNumeros);
console.log(sumarDosNumeros2(1,2));
var usuario ={
        "nombre": "Carolina",
        apellido: "Calderon",
        cedula: '1727152132',
        imprimirEnConsola: function () {
           console.log(this.nombre + ' ' + this.apellido + ' ' + this.cedula)
        }
   // imprimirEnConsola: sumarDosNumeros
};
//console.log("Usuario: ", usuario);
console.log(usuario.imprimirEnConsola); //imprime el nombre de la funcion
console.log(usuario.imprimirEnConsola());

var arregloNumeros =[1,2,3];
var arregloNombres=['Carolina', 'Calderon'];
var arregloUndefined =[undefined];
var arregloTotal =[ casado=true, 5, 'hola', undefined, {nombre: "Carolina", edad: 20, []];
console.log(arregloTotal)


// for

for(var aux=0; aux<10; aux++){
console.log('Aux', aux);
}