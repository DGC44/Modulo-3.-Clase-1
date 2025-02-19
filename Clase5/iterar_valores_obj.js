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