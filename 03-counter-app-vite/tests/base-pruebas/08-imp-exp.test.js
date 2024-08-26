import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('import / exports test', () => {
    test('getHeroById must return a hero by id', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    })
    test('getHeroById return undefined if id doesn´t exist', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect( hero ).toEqual(undefined);
        expect( hero ).toBeFalsy();
    });
    test('getHeroesByOwner must return a DC heroes', () => {
        const owners = [
            {
                owner: "DC",
                heroes: [
                    {id: 1,name: 'Batman',owner: 'DC'},
                    {id: 3,name: 'Superman',owner: 'DC'},
                    {id: 4,name: 'Flash',owner: 'DC'},
                ]
            }, 
            {
                owner: "Marvel",
                heroes: [
                    {id: 2, name: 'Spiderman', owner: 'Marvel'},
                    {id: 5, name: 'Wolverine', owner: 'Marvel'},
                ]
            }
        ];


        owners.forEach(({owner, heroes}) => {
            console.log(`Prueba realizada para owner: ${owner}`);
            const result = getHeroesByOwner(owner);
            
            expect(Array.isArray(result)).toEqual(true);
            heroes.forEach(hero => {
                expect(hero).toHaveProperty('owner', owner);
            })
            expect(heroes.length).toEqual(heroes.length);
        });
    })
})