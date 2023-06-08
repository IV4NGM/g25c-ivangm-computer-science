/*
Crear un objeto "contador" con un método "incrementar" que incremente el valor
"valorActual" en 1, y otro método "obtenerValor" que devuelva el valor actual.
*/

const contador = {
    valorActual: 0,
    incrementar(){
        this.valorActual++;
    },
    obtenerValor(){
        return this.valorActual
    }
}

console.log(contador.obtenerValor())
contador.incrementar()
contador.incrementar()
console.log(contador.obtenerValor())


/*
Crear una clase círculo con propiedades "radio" y una constante "pi" y un método "area"
 para obtener su área.
*/

const PI = 3.1416;

class Circulo{
    constructor(radio){
        this.radio = radio
    }

    area(){
        let result = PI * this.radio * this.radio;
        return result;
    }
}

const circulo1 = new Circulo(15)
console.log(circulo1.area)
console.log(circulo1.area())