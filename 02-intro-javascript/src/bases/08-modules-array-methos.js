/**
 * import, export, array methods
 */

import heroes from "../data/heroes";

export const getById = id => {
    return heroes.find(heroe => heroe.id === id);
}

export const getByOwner = owner => {
    return heroes.filter(heroe => heroe.owner === owner);
}

// console.log(getById(5));
// console.log(getByOwner("Marvel"));