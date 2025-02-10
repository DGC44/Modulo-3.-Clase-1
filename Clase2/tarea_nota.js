// Declarar la variable nota con un valor entre 0 y 100
let notasprueba = [48, 66, 77, 0, 95, 100, 90, 55, 88, 70, 51, 41, 75, 85, 80];
// Pruebas con diferentes valores
notasprueba.forEach(notaPrueba => {
    if (notaPrueba >= 90) {
        console.log(`Tu nota es ${notaPrueba}: Excelente`);
    } else if (notaPrueba >= 75) {
        console.log(`Tu nota es ${notaPrueba}: Bien`);
    } else if (notaPrueba >= 60) {
        console.log(`Tu nota es ${notaPrueba}: Suficiente`);
    } else {
        console.log(`Tu nota es ${notaPrueba}: No aprobado`);
    }
});