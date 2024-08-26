/**
 * Object literals
 */

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 4212412321,
        lat: 14.3223,
        lng: 34.34422
    }
}

const persona2 = {...persona};
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2); 