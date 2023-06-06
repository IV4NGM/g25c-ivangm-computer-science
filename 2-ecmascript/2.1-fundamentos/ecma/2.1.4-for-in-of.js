const array = [100, 90, 110, 101, 12, 70];
const student = {id: 1, name: 'jose', app : 'montoya'};


// for tradicional (imperativo)
for (let i = 0; i < array.length; i++) {
    console.log(`Array[${i}] = ${array[i]} `)
}

// es6
// for of => Arrays (declarativo, se indica qué hacer, pero no se dice explícitamente aumentar el iterador en 1, etc.)

for (let iterador of array) {
    console.log(`Elemento = ${iterador} `)
}

// for in => Objetos
for (let iterador in student) {
    console.log(`clave/key = ${iterador}`)
}

for (let key in student){
    console.log(`student.${key} = ${student[key]}`) // student.key = valor
}