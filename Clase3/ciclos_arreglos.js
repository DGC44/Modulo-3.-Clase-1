let calificaciones = [9.0,8.1,7.6,6.0,9.5,8.8,8.9,7.5]

//Calcular promedio del grupo
let sumatoria = 0
for (let i = 0;i<calificaciones.length;i++) {
    sumatoria = sumatoria + calificaciones[i]
    // sumatoria += califcaciones[i]
}
console.log("Promedio:");
console.log(sumatoria / calificaciones.length);