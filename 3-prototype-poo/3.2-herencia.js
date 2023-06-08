// Clase madre, de la cual heredaremos información
class Animal{
    constructor(nombre, edad, tipo){
        this.edad = edad
        this.nombre = nombre
        this.tipo = tipo
    }

    comer(){
        console.log(`El animal ${this.nombre} come muy rápido`)
    }

    traeInfo(){
        console.log(`El animal ${this.nombre} es un ${this.tipo}`)
        console.log(`El animal ${this.nombre} es un ${this.constructor.name}`)
    }
}

class Vaca extends Animal{
    constructor(nombre, edad, tipo, peso){
        super(nombre, edad, tipo)
        this.peso = peso
    }

    pasta(){
        console.log(`La Vaca ${this.nombre} tiene cabeza y tiene cola y hace muu y pesa ${this.peso} kg`)
    }
}

class Gato extends Animal{
    constructor(nombre, edad, tipo, color){
        super(nombre, edad, tipo)
        this.color = color
    }

    maullar(){
        console.log(`El Gato ${this.nombre} es color ${this.color}`)
    }
}

var animal1 = new Animal("Solovino", 12, "animal")
var vaca1 = new Vaca("Lola", 10, "vaca", 100)
var gato1 = new Gato("Benito Bodoque", 10, "gato", "azul")

animal1.comer()

vaca1.pasta()
vaca1.comer()
vaca1.traeInfo()

gato1.maullar()
gato1.comer()
gato1.traeInfo()