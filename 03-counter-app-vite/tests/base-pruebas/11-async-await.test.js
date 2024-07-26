import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('async / await', () => {
    test('get async image', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    })
})