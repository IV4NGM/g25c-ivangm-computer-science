// variables simples/primitivas
let numero = 10;
let str = 'jose montoya';
// variables complejas
const array = [100, 90, 110, 101, 12, 70];
const student = {id: 1, name: 'jose', app : 'montoya'};

console.log(numero)
console.log(str)

let numero2 = numero
console.log('numero', numero)
console.log('numero2', numero2)
numero = 100
console.log('numero', numero)
console.log('numero2', numero2)

let str2 = str
console.log('str', str)
console.log('str2', str2)
str = 'daniel gloria'
console.log('str', str)
console.log('str2', str2)

// Las variables primitivas hacen el 'paso por valor': al copiar uno y modificar el original no se cambia el copiado

// let array2 = array
// console.log('array', array)
// console.log('array2', array2)
// array.push(999)
// console.log('array', array)
// console.log('array2', array2)

// let student2 = student
// console.log('student', student)
// console.log('student2', student2)
// student.name = 'daniel'
// console.log('student', student)
// console.log('student2', student2)

// En las variables complejas hacen 'paso por referencia', al modificar uno se modifica el otro

// Para hacer una copia de los valores en vez de las referencias, se hace como sigue:

// Sin es6
// JSON.stringify y JSON.parse
// Object Create
// Object Assign

// Con es6: es destructuring:

let array2 = [ ...array ]
console.log('array', array)
console.log('array2', array2)
array.push(999)
console.log('array', array)
console.log('array2', array2)

let student2 = { ...student }
console.log('student', student)
console.log('student2', student2)
student.name = 'daniel'
console.log('student', student)
console.log('student2', student2)