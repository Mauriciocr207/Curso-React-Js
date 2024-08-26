import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Functions test', () => {
    test('getUser return an object', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(testUser);
    })

    test('getUsuarioActivo return an object', () => {
        const name = 'Juan';
        const testUser = {
            uid: 'ABC567',
            username: name
        }

        const user = getUsuarioActivo(name);

        expect(user).toEqual(testUser);
    });
});