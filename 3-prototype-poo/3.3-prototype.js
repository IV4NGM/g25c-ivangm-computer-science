// Definimos un objeto como prototipo

var personaPrototype = {
    saludar(){
        console.log("Hola, yo soy " + this.nombre);
    }
}

// Creamos un objeto basado en el prototipo

var persona1 = Object.create(personaPrototype);
persona1.nombre = "Montoya"
persona1.pelicula = "HP"

// Accedemos al método del prototipo a través del objeto

persona1.saludar();

var persona2 = Object.create(personaPrototype)
persona2.nombre = "Maria"
persona2.saludar()