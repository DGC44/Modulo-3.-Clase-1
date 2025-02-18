const librosLeidos = [];

function agregarLibro(titulo) {
    if (titulo && typeof titulo === "string") {
        librosLeidos.push(titulo);
    }
}

function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Libros leídos:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}


agregarLibro("El Principito de Antoine de Saint-Exupéry");
agregarLibro("El Diario de Ana Frank de Ana Frank");
agregarLibro("Los 7 libros de Harry Potter de J.K. Rowling");
agregarLibro("Las mujeres que aman demasiado de Robin Norwood");
agregarLibro("Zona Peligrosa de Lee Child");
agregarLibro("Cómo ganar amigos e influir sobre las personas de Dale Carnegie");
agregarLibro("¿Quién se ha llevado mi queso? de Spencer Johnson");
agregarLibro("Crónica de una muerte anunciada de Gabriel García Márquez");
agregarLibro("Buscando a Alaska de John Green");
agregarLibro("La Odisea de Homero");
agregarLibro("Cumbres borrascosas de Emily Jane Brontë");
agregarLibro("1984 de George Orwell");
agregarLibro("Padre Rico, Padre Pobre de Robert T. Kiyosaki");
agregarLibro("El Hombre Mas Rica de Babilonia de George Samuel Clason");



mostrarLibrosLeidos();