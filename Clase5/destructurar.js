// Destructuracion de objetos

// Sintaxis 

/* let */ objeto = {
    propiedad1: "valor 1",
    propiedad2: {
        propiedad3: "valor 3"
    }
}

let { propiedad1 } = objeto
console.log(propiedad1) // valor1

let { propiedad2: { propiedad3 } } = objeto
console.log(propiedad3) // valor 3

// Ejemplo

let persona = {
    nombre: "Diana",
    calificaciones: {
        matematicas: 9.0,
        fisica: 8.0,
    }
}

let { nombre } = persona
console.log(nombre) // Diana

let { calificaciones: { fisica } } = persona
console.log(fisica) // 8.0