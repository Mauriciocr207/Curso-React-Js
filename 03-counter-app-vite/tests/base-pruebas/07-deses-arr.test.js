import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Destructuring on arrays', () => {
    test('should return a string and number', () => {
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        // expect(letters).toBe(expect.any(String));
    });
});