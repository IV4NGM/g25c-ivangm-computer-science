const array = [100, 90, 110, 101, 12, 70];

//map y forEach son para arreglos
array.map((element, i) => {
    console.log(`element[${i}] = ${element}`)
})

array.forEach((iterador, index) =>{
    console.log(`element[${index}] = ${iterador}`)
})

// Obtener los números mayores a 100 del array y guardarlos en un nuevo array

// map: retorna cada uno de sus elementos
// no usar el break
const mayor100Map = array.map((element, i) => {
    if (element >= 100) {
        return element;
    }
})
console.log(mayor100Map)
// El map puede modificar y crear arreglos, y el forEach solo recorre arreglos
// forEach no retorna cada uno de sus elementos
// no usar el break
const mayor100ForEach = array.forEach((element, i) =>{
    if (element >= 100) {
        return element;
    }
})
console.log(mayor100ForEach)