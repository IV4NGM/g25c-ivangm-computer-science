class Animal {
    constructor (nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}

class Perro extends Animal{
    constructor(nombre, edad, raza){
        super(nombre, edad)
    }
    establecerRaza(raza){
        this.raza = raza
    }
    saludar(){
        console.log(`El perro ${this.nombre} de ${this.edad} años es de raza ${this.raza}`)
    }
}

let perro1 = new Perro("Firulais", 3)
perro1.saludar()

perro1.establecerRaza("Pastor Alemán")
perro1.saludar()

var vehiculoPrototype = {
    marca : "Toyota",
    modelo : "Nuevo",
}

var cochePrototype = {
    color: "de fábrica",
    setColor(color){
        this.color = color
    },
    saludar(){
        console.log(`Este coche de marca ${this.marca} y modelo ${this.modelo} es de color ${this.color}`)
    }
}

cochePrototype.__proto__ = vehiculoPrototype

let Coche = Object.create(cochePrototype)
Coche.saludar()
Coche.setColor("azul")
Coche.saludar()

function Persona (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log(`${this.nombre} de ${this.edad} años dice hola`)
    }
}

persona1 = new Persona("Juan", 25)
persona1.saludar()