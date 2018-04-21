/*
DEBER 01 JAVASCRIPT
CAROLINA CALDERON
2. Ejercicio
La Empresa Eléctrica Quito tiene 19 generadores de múltiples tipos. Los primeros 4 generan 62 megawatts y los otros 15 generan 124 megawatts
La Empresa Eléctrica Quito ha decidido contratarlo a usted para diseñar un sistema de "loops" para imprimir en consola el total de megawatts generado por cada generador con el siguiente formato:
- "Generador #1 está prendido, añadiendo 62 MW para un total de 62 MW."
- "Generador #2 está prendido, añadiendo 62 MW para un total de 124 MW."
El primer loop es requerido que sea construido con "while" administrando los 4 primeros generadores y el segundo que sea construido con un "for" para los 15 generadores restantes.
Como una funcionalidad adicional quisieran que se puedan activar los generadores pares, impares o todos.
Es decir, en el ejemplo anterior el formato imprimiría lo siguiente para los generadores impares:
- "Generador #1 está prendido, añadiendo 62 MW para un total de 62 MW."
- "Generador #2 está apagado."

*/

let numeroDeWatts=62;
let numeroGeneradores=19;
let listaGeneradores =['1', '2', '3', '4', '5',
    '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15',
    '16', '18', '19'];
while (listaGeneradores.length <= 4) {
    console.log(`El Generador ${listaGeneradores[listaGeneradores.length +1]} está prendido, añadiendo 62 megawatts para un total de ${numeroDeWatts}`);
    numeroDeWatts = numeroDeWatts + 62;
}
for(numeroGeneradores=1; numeroGeneradores<=19; numeroGeneradores.length++){
        console.log(`El Generador ${numeroGeneradores} está prendido, añadiendo 62 megawatts para un total de ${numeroDeWatts}`);
        numeroDeWatts=numeroDeWatts+124;
}


