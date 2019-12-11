//type inference
let a= 'hola';
a = 'Hoolas';
a = 5;
//variables con type
let b: number = 10;
b = a;
b = 20;
b = 10 + 10;
const num1 = 10;
const num2 = 20;
b = num1 + num2;

//funciones con type
function suma(num1: number,num2:number): number
{
    return num1 + num2;
}
console.log("suma" + suma(19, 10))

//type keyword se asignan alias para una congnotación semántica

type dni = number;

let dniNumber: dni = 1234;
