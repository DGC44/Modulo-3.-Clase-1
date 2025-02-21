// Buscador: _______________

let lista_de_personas = [
    { nombre: "Diana", apellido: "GC", edad: 20 },
    { nombre: "Juan", apellido: "Perez", edad: 25 },
    { nombre: "Luis", apellido: "Lopez", edad: 31 },
]

let buscar_persona = (nombre) => {
    for (let i = 0; i < lista_de_personas.length; i++) {
        let persona = lista_de_personas[i]
        if (persona.nombre === nombre) {
            return persona
        }
    }
}

let result = buscar_persona("Luis")

console.log(result)