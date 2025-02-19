// Buscador

lista_de_personas = [
    {
        "id": 1,
        "nombre": "Diana",
        "apellido": "Garcia",
        "edad": 20,
        "profesion": "Desarrolladora Web"
    },
    {
        "id": 2,
        "nombre": "Miguel",
        "apellido": "Basulto",
        "edad": 25,
        "profesion": "Finanzas y Economia"
    }
]

let buscar_persona = (id) => {
    for (let i = 0; i < lista_de_personas.length; i++) {
        let persona = lista_de_personas[i]
        if (persona.id == id) {
            return persona
        }
    }
}
let result = buscar_persona(1)

console.log(result)