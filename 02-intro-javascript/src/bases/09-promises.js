/**
 * Promises
 */

import { getById } from "../bases/08-modules-array-methos";

const getHeroeByIdAsync = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const heroe = getById(id);
            res(heroe);
            // rej("No se encontró ningún héroe");
        }, 2000);
    });
}

getHeroeByIdAsync(5)
    .then(console.log)
    .catch(console.log)
    .finally(() => console.log('Operacion finalizada'));

