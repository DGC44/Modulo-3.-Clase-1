// Iterar por propiedades de un objeto

objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
}

let propiedades = Object.keys(objeto) // Devuelve un array de las propiedades del objeto
// ["propiedad1", "propiedad2", "propiedad3"]

for (let i = 0; i < propiedades.length; i++) {
    console.log(objeto[propiedades[i]]) // objeto["propiedad1"]
}

// Ejemplo

let persona = {
    nombre: "Diana",
    apellido: "Garcia",
    edad: 20,
}

propiedades = Object.keys(persona) // ["nombre", "apellido", "edad"]

for (let i = 0; i < propiedades.length; i++) {
    console.log(persona[propiedades[i]])
}

// Objetos anidados

//Sintaxis 

/* let */ objeto = {
    propiedad1: "valor1",
    propiedad2: {
        propiedad3: "valor3"
    }
}
 
// Por separado
let propiedad2 = objeto.propiedad2 // {propiedad3: "valor3"}
propiedad2.propiedad3 // "valor3"
// o
objeto.propiedad2.propiedad3 // "valor3"

// Ejemplo

/* let */ persona = {
    nombre: "Diana",
    calificaciones: {
        matematicas: 9.0,
        fisica: 8.5
    }
}

let calificaciones = persona.calificaciones // {matematicas: 9.0, fisica: 8.5}
console.log(calificaciones.matematicas) // personas.calificaciones.matematicas // 9.0

/* let */ persona2 = {
    nombre: "Miguel",
    calificaciones: {
        matematicas: 9.5,
        fisica: 8
    }
}
console.log(persona2.calificaciones.matematicas)