import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Promises', () => { 
    test('getHeroeByIdAsync must return a hero', () => {
        const id = 1;
        return getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name:'Batman',
                    owner: 'DC',
                });
            })
    })
    test('getHeroeByIdAsync must return an error if hero doesn´t exist', () => {
        const id = 100;
        return getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name:'Batman',
                    owner: 'DC',
                });
            })
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe id: ${id}`);
            })
    })
});