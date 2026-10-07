const myArray = [
    "Hola",
    12,
    "Món",
    {},
    { id: 15 },
    ['lala'],
]

// nombres, strings, objectes
export function divideixPerTipus(arr) {
    const resultat = {
        nombres: [],
        strings:[],
        objectes: [],
    }
    for (const element of arr) {
        switch (typeof element){
            case "number":
                resultat.nombres.push(element);
                break;
                case "string":
                resultat.strings.push(element);
                break;
                case "object":
                resultat.objectes.push(element);
                break;
        }
    }
    return resultat;
}
    

            
     
    

const nouArray = divideixPerTipus(myArray);
console.log(nouArray);

//Sortida:
// {
//   nombres: [ 12 ],
//   strings: [ 'Hola', 'Món' ],
//   objectes: [ {}, { id: 15 }, [ 'lala' ] ]
// }