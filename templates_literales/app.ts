function getNombre(nombre:string)
{
    return nombre;
}

let nombre:string = "Rodrigo";
let apellido:string = "Salazar";
let edad:number = 28;

//template literal se utiliza para inicializar ``
//Antes del EC6
//var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
//después 
let texto:string = `Hola, ${ nombre } ${ apellido } (${ edad })`;

let texto2 = ` ${ getNombre(nombre) } `;

console.log(texto);
console.log(texto2);