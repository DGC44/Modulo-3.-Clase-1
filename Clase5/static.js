// Metodos estaticos y propiedades estaticas

// Sintaxis

class Persona {
    static saludar() {
        console.log("Hola")
    }
}

// Metodo estatico
let persona = new Persona()

// Metodo regular
persona.nombre_en_mayuculas()

// Metodo estatico
Persona.saludar()

// Propiedad estatica
console.log(Persona.propiedad)