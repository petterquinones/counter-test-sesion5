import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('usContext debe retornar un Objeto', () => { 
    test('should first', () => { 
        
        const clave = 'petdev';
        const edad = 35;

        const testUsContext = usContext();
        

        const testObjConttex = {
                nombreClave: clave,
                anios: edad,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            
        }

        expect(testUsContext).toEqual(testObjConttex)

     })
 })