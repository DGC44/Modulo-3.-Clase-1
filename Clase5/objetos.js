// Creacion de objetos literales

// Sintaxis

let objeto = {
    propiedad: "valor"
}

let persona = {
    nombre: "Diana", 
    // Nombre de la llave --- Valor de la llave
    apellido: "García",
    edad: 20,
    profesion: "Desarrolladora Web"
} //En arreglos, se tiene valores. En un objeto, se tienen propiedades. Cada numero tiene una llave con un valor

let persona2 = {
    nombre: "Luis",
    apellido: "Basulto",
    edad: 25,
    profesion: "Finanzas y Economia"
}

/* persona ["nombre"] la consola refleja "Diana"
persona ["apellido"] la consola refleja "Garcia"
persona ["edad"] la consola refleja 20
persona ["profesion"] la consola refleja "Desarrolladora Web" */

// Acceso a propiedades
console.log(persona.edad)
console.log(persona2.apellido) // Esto es igual a console.log(persona2["apellido"])
// o
console.log(persona2["edad"])
console.log(persona["profesion"])

console.log("-------------------------------")

lista_de_propiedades = ["edad", "apellido", "profesion"]

for (let i = 0; i < lista_de_propiedades.length; i++) {
    console.log(persona[lista_de_propiedades[i]])
}

// Modificacion de propiedades
objeto.propiedad = "nuveo valor" //Sintaxis
// Ejemplo
persona.edad = 34

// Metodos de objetos 
// No importa como delcarar una funcion, e JS, seran variables.

persona.saludar = function() { //Sintaxis o persona.saludar = 
    console.log("Hola, me llamo " + persona.nombre)
}


/* let */ objeto = {
    metodo: (parametros) => { /*function (parametros) { */
        // codigo        
    }
}


// Ejemplo

let persona = {
    saludar: (nombre) => {
        console.log("Hola, me llamo " + nombre)
    }
}

// Llamar a un metodo
persona.saludar("persona")

persona2 = {
    saludar: (nombre) => {
        console.log("Hola, me llamo " + nombre)
    }
}


// Uso de this

// Sintaxis
objeto = {
    propiedad: "valor",
    metodo: function() {
        console.log(this.propiedad)
    }
}

objeto.metodo()

// Ejemplo

/* let */ persona = {
    nombre: "Diana",
    nombre_en_mayuculas: function() {
        console.log(this.nombre.toUpperCase())
    }
}

let result = persona.nombre_en_mayuculas()
persona.nombre_en_mayuculas() 

