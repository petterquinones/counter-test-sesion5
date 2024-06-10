import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Test archivo 07 desestructuración de un arreglo', () => { 
    test('debe retornar Un string y un numero', () => { 
        const [letter, numbers] = retornaArreglo();
        console.log(letter)
        console.log(numbers)
        console.log(typeof letter)
        console.log(typeof numbers)
        expect(typeof letter).toBe('string');
        expect(typeof numbers).toBe('number');
     })
 })