import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Prueba 08-imp-exp', () => { 

    test('getHeroeById debe retornar un heroe por ID', () => {  
        const id = 1;
        const hero = getHeroeById(id);
        const heroTest = { id: 1, name: 'Batman', owner: 'DC' }
        console.log(hero)
        expect(hero).toEqual(heroTest)
    })
    
    test('getHeroeById debe retornar un heroe por undefined', () => {  
        const id = 100;
        const hero = getHeroeById(id);
       
        console.log(hero)
        //Esperar que el retorno sea falso o null o undefined, tener cuidado porque false tambien es falsy
        expect(hero).toBeFalsy();
    })

    test('debe retornar un arreglo con los heroes de DC', () => { 
        const owner = 'Marvel'
        const hero = getHeroesByOwner(owner);

        console.log(hero)
        expect(hero).toHaveLength(2)
     })

     test('debe retornar un arreglo con los heroes de DC', () => { 
        const owner = 'DC'
        const hero = getHeroesByOwner(owner);

        console.log(hero)
        expect(hero).toHaveLength(3)
     })

 })