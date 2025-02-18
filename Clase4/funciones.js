// Sintaxis. Es una estructura de codigo reutilizable
function nombre_de_la_funcion(parametros) {
    // Cuerpo de la función
}

// Para llamarla
let parametros = null
nombre_de_la_funcion(parametros) //Parametros o argumentos


// Ejemplo

function saludar() {
    console.log("Hola")
}

saludar()
saludar()
saludar()
saludar()

// Ejemplo con parámetros

function saludar(nombre) { //Parametros son como variables y se especifican fuera de la función
    // let nombre = "DGC"
    console.log("Hola " + nombre)
}
saludar("DGC")

function multiplicar(a, b) {
    let c = a * b
    console.log(c)
}
multiplicar(2, 5)

// Return

function saludar(nombre) {
    console.log("Hola: " + nombre)
}

function pasar_a_mayusculas(nombre) {
    return nombre.toUpperCase() //Funcion puede regresar un valor. Terminar un proceso y dar un resultado.
}

let nombre_minusculas = "dgc"
// pasar a mayúsculas
let nombre_mayusculas = pasar_a_mayusculas(nombre_minusculas)

saludar(nombre_mayusculas)

// Scope

//Afuera
let numero_cien = 100 

function multiplicar_por_cien(x) {
    return x*numero_cien
}

let result = multiplicar_por_cien(5)
console.log(result)

// Dentro
/* function multiplicar_por_cien(x, numero_cien) {
    return x*numero_cien
}

let result = multiplicar_por_cien(5,400)
console.log(result) */

console.log("-----------------------")

// Ejemplo

let persona_random = "Luis"
function escuela() {

    let padre_de_familia = "Jose"
    let alumno = "Javier"

    function patio() {
        let alumno = "Cesar"

        console.log(alumno)
        console.log(padre_de_familia)
        console.log(persona_random)
    }
    patio()
}

escuela()

console.log("-----------------------")

// Funciones anónimas

// Usando funciones como parametros
function saludar_con_estilo(nombre, estilo) {
    return "Hola: " + estilo(nombre)
}

function formal(nombre) {
    return "Sr./Sra. " + nombre
}

function informal(nombre) {
    return "Amigx " + nombre
}

result = formal("Luis")
console.log(result)

result = saludar_con_estilo("Diana", informal)
console.log(result)


// Usar funciones anonimas
let mi_nombre = "Diana"
result = saludar_con_estilo(mi_nombre, formal)
console.log(result)

// Funciones anonimas porque no tienen nombre
result = saludar_con_estilo(mi_nombre, function(nombre) {
    return "Hace mucho que no te veía, te echaba de menos " + nombre
})
console.log(result)

// Funciones flecha

let mi_var = 5

/*function mi_func() {
Una funcion tambien es una variable

}*/

/*
let mi_func = function() {
 Una variable con una funcion
}

let mi_funct = () => {
    return 
}

let mi_funct = (a,b) => a*b
let mi_funct = a => a*a
*/

// Ejemplos de funciones flecha

let suma = function(a,b) {
    return a + b
}

let resta = (a,b) => {
    return a - b
}

// let multiplicar = (a,b) => a*b

let al_cuadrado = a => a*a

let operarar = (op, val_a, val_b) => op(val_a, val_b)


operarar((a,b) => a + b, 5, 10)