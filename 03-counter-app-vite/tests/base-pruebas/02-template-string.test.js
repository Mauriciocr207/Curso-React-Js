import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Template string test', () => {
    test('should return a string with the name', () => {
        // Inicialización
        const name = 'Fernando';
        // Estimulo
        const message = getSaludo(name);
        // Observar el comportamiento esperado
        expect(message).toBe(`Hola ${name}`);
    });
})