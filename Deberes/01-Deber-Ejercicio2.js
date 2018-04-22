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
var numeroDeWatts = 0;
var numeroGeneradores = 0;
var estado;
var activarTodosLosGeneradores = /** @class */ (function () {
    function activarTodosLosGeneradores() {
    }
    activarTodosLosGeneradores.prototype.imprimirGeneradores = function (numeroTotalGeneradores, estadoPares, estadoImpares) {
        while (numeroGeneradores <= numeroTotalGeneradores) {
            numeroGeneradores++;
            if (numeroGeneradores <= 4 && (numeroGeneradores % 2) == 0) {
                numeroDeWatts = numeroDeWatts + 62;
                estado = estadoPares;
                console.log("El Generador " + numeroGeneradores + " est\u00E1 " + estado + ", a\u00F1adiendo 62 megawatts para un total de " + numeroDeWatts);
            }
            else if (numeroGeneradores <= 4 && (numeroGeneradores % 2) != 0) {
                numeroDeWatts = numeroDeWatts + 62;
                estado = estadoImpares;
                console.log("El Generador " + numeroGeneradores + " est\u00E1 " + estado + ", a\u00F1adiendo 62 megawatts para un total de " + numeroDeWatts);
            }
        }
        for (numeroGeneradores = 5; numeroGeneradores <= numeroTotalGeneradores; numeroGeneradores++) {
            numeroDeWatts = numeroDeWatts + 124;
            if ((numeroGeneradores % 2) == 0) {
                estado = estadoPares;
                console.log("El Generador " + numeroGeneradores + " est\u00E1 " + estado + ", a\u00F1adiendo 124 megawatts para un total de " + numeroDeWatts);
            }
            else {
                estado = estadoImpares;
                console.log("El Generador " + numeroGeneradores + " est\u00E1 " + estado + ", a\u00F1adiendo 124 megawatts para un total de " + numeroDeWatts);
            }
        }
    };
    return activarTodosLosGeneradores;
}());
var generadores = new activarTodosLosGeneradores();
generadores.imprimirGeneradores(19, 'Encendido', 'Apagado');
