/**
 * Destructuring
 */

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const useContext = ({nombre, edad, clave, rango = 'Capitán'}) => {
    return {
        nombreClave: clave,
        anios: edad
    }
}

// eslint-disable-next-line
const {nombreClave, anios} = useContext(persona);
console.log(nombreClave, anios);