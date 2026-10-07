import { describe, it, expect, test } from "vitest";
import { valorsAbsoluts } from "../Exercicis/01-sol";


describe('01-sol.js', () => {
    describe('valorsAbsoluts',()=>{
        it("converteix els nombres negatius en positius",()=>{
            expect(valorsAbsoluts([-2,-3,5,-15])).toEqual([2,3,5,15])
        })
        it("manté els nombres positius",()=>{
            expect(valorsAbsoluts([2,3,5,-15])).toEqual([2,3,5,15])          
        })
        it("retorna un array buit si rep array buit",()=>{
            expect(valorsAbsoluts([])).toEqual([])          
        })
    })
});