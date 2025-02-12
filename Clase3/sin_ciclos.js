/* ciclo {
... dentro que se repite
}*/

let a = 5

// Multiplicacion (no existe el *)

// res = 5 * 10

a = a + 5
a = a + 5
a = a + 5
a = a + 5
a = a + 5
a = a + 5
a = a + 5
a = a + 5
a = a + 5
a = a + 5

console.log(a)

/* Mientras los ciclos /iteraciones sean menores a 10  {
    a = a + 5
}*/

let i = 10 // Numero de iteraciones
let b = 0

while (i < 10) {
    b = b + 5
    i = i + 1
}

console.log(b)

// Equivalente a

i = 0
b = 0

if (i < 10) {
    b = b + 5
    i = i + 1
}

if (i < 10) {
    b = b + 5
    i = i + 1
}

if (i < 10) {
    b = b + 5
    i = i + 1
}

if (i < 10) {
    b = b + 5
    i = i + 1
}
if (i < 10) {
    b = b + 5
    i = i + 1
}


console.log(b)


// Ciclo for

// let c=0
// let i=0

// while (i < 10) {
//    c = c + 5
//    i = i + 1
//}

for (let i = 0; i < 10; i = i + 1) { // ese i = i +1 es igual a i++
    c = c + 5
}

c=0
for (let i = 0; i < 10; i++) {
    c = c + 5
}
console.log(c)