class Libro {
    constructor(titulo, autor, año, estado) {
      this.titulo = titulo;
      this.autor = autor;
      this.año = año;
      this.estado = estado;
      this.capitulos = []; // Lista de capítulos
    }
  
    describirLibro() {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.año}. El estado es ${this.estado}.`);
      console.log("-----------------------")
    }

    agregarCapitulo(capitulo) {
      this.capitulos.push(capitulo);
      console.log(`Capítulo "${capitulo}" agregado.`);
    }
  
    eliminarCapitulo(capitulo) {
      const index = this.capitulos.indexOf(capitulo);
      if (index !== -1) {
        this.capitulos.splice(index, 1);
        console.log(`Capítulo "${capitulo}" eliminado.`);
      } else {
        console.log(`El capítulo "${capitulo}" no se encontró.`);
      }
    }
  
    listarCapitulos() {
      if (this.capitulos.length === 0) {
        console.log("El libro no tiene capítulos registrados.");
      } else {
        console.log("-----------------------")
        console.log("Capítulos del libro:");
        this.capitulos.forEach((capitulo, index) => {
          console.log(`${index + 1}. ${capitulo}`);
        });
      }
    }
  }
  
  // Ejemplo de uso
  const libro1 = new Libro("El Principito", "Antoine de Saint-Exupéry", 1943, "Disponible");
  libro1.describirLibro();
  libro1.agregarCapitulo("Capítulo 1: El encuentro");
  libro1.agregarCapitulo("Capítulo 2: El asteroide");
  libro1.listarCapitulos();
  libro1.eliminarCapitulo("Capítulo 1: El encuentro");
  libro1.listarCapitulos();
  