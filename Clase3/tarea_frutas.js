// CICLO FOR

// 1. Declarar el arreglo de frutas
let frutas = ["manzana", "plátano", "manzana", "naranja", "pera", "plátano", "manzana", "mango", "pera","mango", "manzana","fresa","kiwie","fresa","kiwie","mango","pera","uva","uva","mango","pera","sandia","durazno","uva","fresa","fresa","uva","mango","durazno","manzana","plátano","plátano","naranja","uva","sandia","kiwie","naranja","fresa","sandia","durazno","durazno","sandia","naranja","naranja"];

// 2. Crear un objeto para contar las frutas
let conteoFrutas = {};

// 3. Usar un ciclo for para contar cada fruta
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++; // Si ya existe, aumentar el conteo
    } else {
        conteoFrutas[fruta] = 1; // Si no existe, iniciarlo en 1
    }
}

// 4. Imprimir el resultado 
console.log("Conteo de frutas con for:", conteoFrutas);



// CICLO WHILE

// 1. Reiniciamos el objeto de conteo
conteoFrutas = {}; 

// 2. Índice inicial para while
let i = 0;

// 3. Usar un ciclo while para contar las frutas
while (i < frutas.length) {
    let fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
    i++; // Incrementar el índice
}

// 4. Imprimir el resultado 
console.log("Conteo de frutas con while:", conteoFrutas);