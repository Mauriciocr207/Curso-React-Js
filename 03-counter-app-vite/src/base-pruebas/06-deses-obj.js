export const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        nombre,
        nombreClave: clave,
        anios: edad,
        rango,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
};


