import { getHeroeById } from './08-imp-exp';

export const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () =>  {
            const hero = getHeroeById( id );
            if ( hero ) {
                resolve( hero );
            } else {
                reject( `No se pudo encontrar el héroe id: ${id}` );
            }
        }, 1000 )
    });
}