import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe de retornar un Objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        //console.log(user)
        expect( testUser ).toEqual( user )
     })

     test('getUsuarioActivo debe de retornar un Objeto Activoo', () => { 
        const name = 'Sara'
        
        const testUserAct = {
            uid: 'ABC567',
            username: name
        }

        const userAct = getUsuarioActivo(name);

        expect(testUserAct).toEqual(userAct)
      })
 })