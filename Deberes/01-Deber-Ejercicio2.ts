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

let numeroDeWatts = 0;
let numeroGeneradores = 0;
while (numeroGeneradores <= 19) {
    numeroGeneradores++;
    if (numeroGeneradores <= 4) {
        numeroDeWatts = numeroDeWatts + 62;
        console.log(`El Generador ${numeroGeneradores} está prendido, añadiendo 62 megawatts para un total de ${numeroDeWatts}`);
    }
}

for (numeroGeneradores = 5; numeroGeneradores <= 19; numeroGeneradores++) {
    numeroDeWatts = numeroDeWatts + 124;
    console.log(`El Generador ${numeroGeneradores} está prendido, añadiendo 124 megawatts para un total de ${numeroDeWatts}`);

}


