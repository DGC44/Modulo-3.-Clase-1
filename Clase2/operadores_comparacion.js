// Igualdad debil
let a = "palabra"
let b = "palabra"

console.log(a == b) // True

let x = 0
let y = "0"

console.log(x == y) // True

// Igualdad fuerte
console.log(a === b) // True
console.log(x === y) // False

// Desigualdad debil
console.log(a != b) // False
console.log(x != y) // False

// Desigualdad fuerte
console.log(a !== b) // False
console.log(x !== y) // True

// Mayor que
let z = 10
let w = 5

console.log(z > w) // True

// Menor que
console.log(z < w) // False

// Mayor o igual que
console.log(z >= w) // True

// Menor o igual que
console.log(z <= w) // False


// Ejemplo practico
let edad_minima = 18

let edad = 17

console.log(edad >= edad_minima)
