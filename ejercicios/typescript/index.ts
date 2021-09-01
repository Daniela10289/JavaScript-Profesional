// TypeScript es un superset de JavaScript que añade tipos a nuestras variables ayudando así a la detección de errores de forma temprana y mejorando el autocompletado.

// Los navegadores no entienden TypeScript así que lo vamos a transpilar a JavaScript usando Parcel.

console.log('Hello TypeScript');

function add(a: number, b: number) {
    return a + b; // asi se añade el tipado a los argumentos
}

const sum = add(2, 3);
 