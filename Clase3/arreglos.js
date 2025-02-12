// Arreglos

let a = [1, 2, 3, 4, 5]

// push -> Agregar un elemento al final del arreglo
a.push(6)
console.log(a)

// pop -> Elimina el ultimo elemento del arreglo
a.pop()
console.log(a)

// unshift -> Agregar un elemento al inicio del arreglo
a.unshift(0)
console.log(a)

// shift -> Elimina el primer elemento del arreglo
a.shift()
console.log(a)

// sort -> Ordenar el arreglo
let b = [4,1,6,8,2,3,5,7,9]
b.sort()
console.log(b)

// map -> Modificar todos los elementos del arreglo y Mapear el arreglo
let c = [4,1,6,8,2,3,5,7,9]
let d = c.map(function(elemento){
    return elemento * 2  //Modifica considerando esta condicion, es decir, multiplica los elementos x2
})
console.log(d)