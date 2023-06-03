function sumarArreglos(a, b){
    if(a.length==b.length){
        let c = [];
        for(let i = 0; i < a.length; i++){
            c[i] = a[i] + b[i]; 
        }
        return c;
    }else{
        return ("Error: Los arreglos no tienen la misma longitud.");
    }
}

function sumar_restarMatrices(A, B, operacion){
    if(A.length == B.length && A[0].length == B[0].length){
        let C = [];
        for(let i = 0; i < A.length; i++){
            let row = [];
            for(let j = 0; j < A[0].length; j++){
                if(operacion == "suma"){
                    row[j] = A[i][j]+B[i][j];
                }else if(operacion == "resta"){
                    row[j] = A[i][j]-B[i][j];
                }
            }
            C.push(row);
        }
        return C;
    }else{
        return ("Error: Las matrices no tienen las mismas dimensiones.");
    }
}

function multiplicarMatrices(A, B){
    if(A[0].length == B.length){
        let C = [];
        for(let i = 0; i < A.length; i++){
            let row = [];
            for(let j = 0; j < B[0].length; j++){
                let elem = 0;
                for(let k = 0; k < A[0].length; k++){
                    elem += A[i][k]*B[k][j];
                }
                row.push(elem);
            }
            C.push(row);
        }
        return C;
    }else{
        return ("Error: Las matrices no se pueden multiplicar."); 
    }
}

let arr1 = [1,3,5];
let arr2 = [6,7,9];
console.log(`La suma de los arreglos [${arr1}] y [${arr2}] es [${sumarArreglos(arr1, arr2)}]`);

let mat1 = [[1,2,3], [4,5,6], [7,8,9]];
let mat2 = [[10,20,30], [40,50,60], [70,80,90]];
console.log('La suma de las matrices');
console.table(mat1);
console.log('y');
console.table(mat2);
console.log('es');
console.table(sumar_restarMatrices(mat1, mat2, "suma"));

console.log('La resta de las matrices');
console.table(mat1);
console.log('y');
console.table(mat2);
console.log('es');
console.table(sumar_restarMatrices(mat1, mat2, "resta"));

let mat3 = [[1,0], [-2,3], [5,4], [0,1]];
let mat4 = [[0,6,1], [3,8,-2]];
console.log('El producto de las matrices');
console.table(mat3);
console.log('y');
console.table(mat4);
console.log('es');
console.table(multiplicarMatrices(mat3, mat4));