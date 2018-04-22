/*
Ejercicio 3
El Ministerio del Ambiente ha empezado un proyecto que va a aumentar la población de osos de anteojos. Cada mes han calculado que la población de osos se va a aumentar por 4 (x 4).
El Ministerio del Ambiente quiere que se imprima en consola dependiendo de un número de meses el número de osos de anteojos que han aumentado cada mes hasta el mes definido con el siguiente formato.
- "Van a existir 16 osos de anteojos después del mes 1."
- "Van a existir 64 osos de anteojos después del mes 1."
El Ministerio también se ha dado cuenta que el crecimiento de los osos de anteojos es alto y quisieran que si el total de número de ojos sobrepasa los 10.000 osos de anteojos se tome solamente la mitad de ese valor y se siga calculando el valor para el siguiente mes. Si esto sucede se debe de recalcular el número de ojos y mostrar este mensaje en pantalla:
EJ: 15.000 osos
- "Removiendo 7.500 osos de anteojos de la población."
- "Van a existir 7.500 osos de anteojos después del mes X."

 */
let poblacionInicialOsos=16;
class poblacionOsos{
    public imprimirPoblacionOsos(){
        for(let numeroMes=1; numeroMes<=12; numeroMes++){
            poblacionInicialOsos=poblacionInicialOsos*4;

            if(poblacionInicialOsos>=10000){
                poblacionInicialOsos=poblacionInicialOsos/2;
                console.log(`Removiendo ${poblacionInicialOsos} osos de anteojos de la poblacion`);
                console.log(`Van a existir ${poblacionInicialOsos} osos de anteojos después del mes ${numeroMes}`);
            }
            else
            {
                console.log(`Van a existir ${poblacionInicialOsos} osos de anteojos después del mes ${numeroMes}`);
            }
        }

    }
}

let osos: poblacionOsos=new poblacionOsos();
osos.imprimirPoblacionOsos();