
export function valorsAbsoluts(arr) {
    return arr.map(n=>Math.abs(n));
    
}
const nombres = [-2, 3, 5, -15];
const absoluts = valorsAbsoluts(nombres);
console.log(absoluts);


// Cridar la funció
//Mostrar
// Sortida
//[2,3,5,15];