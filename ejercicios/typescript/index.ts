// TypeScript es un superset de JavaScript que añade tipos a nuestras variables ayudando así a la detección de errores de forma temprana y mejorando el autocompletado.

// Los navegadores no entienden TypeScript así que lo vamos a transpilar a JavaScript usando Parcel.

console.log('Hello TypeScript');

// function add(a: number, b: number) {
//     return a + b; // asi se añade el tipado a los argumentos
// }

// const sum = add(2, 3);

// Boolean
let muted: boolean = true;
muted = false;

// Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;
 

// String 
let nombre: string = "Naniela"
let saludo = `Me llamo ${nombre}`;

// Arreglos
  let people: string[] = [];
  people = ["Isabel", "Nicole", "Raul"];
//   people.push("9000")

// Arreglo de string y numeros
let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push("Ricardo")
peopleAndNumbers.push(9001)

// Enum
enum Color {
    Rojo = "Rojo", // hubo que inicializarlos todos para que pudiera imprimir el nombre del color y no la posición
    Verde = "Verde", 
    Azul = "Azul",
    Morado = "Morado"
}

let colorFavorito: Color = Color.Morado
console.log(`Mi color favorito es el ${colorFavorito}`)

//Any // es un keywor
let comodin: any = "joker"; // como el tipo de dato es diferente string y object se le pone any
comodin = { type: 'Wildcard' };

// Object 
let someObject: object = { type: 'Wildcard' };

// Funciones
function add(a: number, b: number) {
    return a + b; // asi se añade el tipado a los argumentos
}

const sum = add(4, 6);

function createAdder(a: number): (number) => number { //(number) => number indica que es el valor de regreso una funcion
    return function(b: number) {
        return b + a; 
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Smith'): string { 
    // lastName?: se le añade ? para que sea opcional
    // se le puede añadir un valor por defecto
    return `${firstName} ${lastName}`;
}

const Daniela = fullName('Agente')
console.log(Daniela);