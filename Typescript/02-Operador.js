var arregloNumeros = [1, 2, 3, 4, 5];
var arregloUusaios = [
    {
        nombre: 'Carolina',
        edad: 28
    },
    {
        nombre: 'Luis',
        edad: 10
    },
    {
        nombre: 'Andres',
        edad: 70
    },
    {
        nombre: 'Marta',
        edad: 32
    },
    {
        nombre: 'Maria',
        edad: 25
    },
];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var totalEdades = function (arregloDeNumeros) {
    //codigo extra
};
var facultades = function (a) { return ['Facultad1', 'Facultad2']; }; //devuelve el arreglo, omite la palabra reutrn
var facultadesDos = function (a, b) {
    return ['Facultad1', 'Facultad2'];
};
//primero parametros requeridos luego los opcionales
//en un constructor se puede hacer lo mismo
/*arregloNumeros.forEach(
    (valor, indice, arreglo)=>{
    console.log('valor', valor);
    console.log('indice', indice);
    console.log('arreglo', arreglo);
    }
);*/
// for each es un operador
var sumar = 0;
arregloNumeros.forEach(function (valor, indice, arreglo) {
    sumar = sumar + valor;
    console.log(sumar);
});
var resultadoDeLaSuma = arregloNumeros.reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado - valorArreglo;
}, 20 //valor inicial
);
console.log('resultado', resultadoDeLaSuma);
var resultadoDeLaSumaDos = arregloNumeros.reduce(function (totalAcumulado, valorArreglo) { return totalAcumulado - valorArreglo; }, 20);
