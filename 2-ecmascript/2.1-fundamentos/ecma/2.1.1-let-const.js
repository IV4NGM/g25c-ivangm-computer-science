// var: define en scope global

var titlePage = 'Dev f .io'

// let: define scope específico es6
function sum(num1, num2){
    let result = num1 + num2;
    return result
}


console.log(sum(20, 50))

// const: no se puede modificar
const PI = 3.14159

/*
Constantes: nombrarlas con mayúscula cuando son valores de referencia o comparación en nuestro sistema.
const MAYOR_AGE=18
Nombrarlas en minúsculas cuando no son de referencia o comparación y son simples variables
*/