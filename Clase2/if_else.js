// If solo
let a = 5
let b = 10

if (a < b) {
    console.log("a es menor que b")
    console.log("a sigue siendo menor que b")
}

if (a > b) {
    console.log("a es mayor que b")
    console.log("a sigue siendo mayor que b")
}

// If else
a = 5
b = 5

if (a < b) {
    console.log("a es menor que b")
} else { //Si es falso, entonces
    console.log("a es mayor que b")
}

// If else if
if (a < b) {
    console.log("a es menor que b")
} else if (a == b) { // Sino, es esto
    console.log("a es igual que b")
} else { // Si no es ninguna de las dos anteriores
    console.log("a es mayor que b")
}