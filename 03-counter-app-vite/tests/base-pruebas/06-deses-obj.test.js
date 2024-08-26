import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Destructuring object test', () => {
    test('usContext return an object', () => {
        const clave = 123;
        const nombre = "Mauricio";
        const edad = 20;
        const rango = "Marvel Heroe";

        const testContext = {
            nombre,
            nombreClave: clave,
            anios: edad,
            rango,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }  
        }

        const context = usContext({clave, nombre, edad, rango});

        expect(context).toEqual(testContext);
    })
})