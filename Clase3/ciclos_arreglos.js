let calificaciones = [9.0,8.1,7.6,6.0,9.5,8.8,8.9,7.5]

//Calcular promedio del grupo
let sumatoria = 0
for (let i = 0;i<calificaciones.length;i++) { // i es el contador y sumatoria es el acumulador
    sumatoria = sumatoria + calificaciones[i]
    // sumatoria += califcaciones[i]
}
console.log("Promedio:");
console.log(sumatoria / calificaciones.length);

//Equivalencia sin For

// let calificaciones = [9.0,8.1,7.6,6.0,9.5,8.8,8.9,7.5]
// let sumatoria = 0
i = 0
if(i<calificaciones.length){
    sumatoria = sumatoria + calificaciones[0];
    i++
}
if(i<calificaciones.length){
    sumatoria = sumatoria + calificaciones[1];
    i++
}
if(i<calificaciones.length){
    sumatoria = sumatoria + calificaciones[2];
    i++
}
if(i<calificaciones.length){
    sumatoria = sumatoria + calificaciones[3];
    i++
}
if(i<calificaciones.length){
    sumatoria = sumatoria + calificaciones[4];
    i++
}
if(i<calificaciones.length){
    sumatoria = sumatoria + calificaciones[5];
    i++
}
if(i<calificaciones.length){
    sumatoria = sumatoria + calificaciones[6];
    i++
}
if(i<calificaciones.length){
    sumatoria = sumatoria + calificaciones[7];
    i++
}