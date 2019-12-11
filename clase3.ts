type Dni = number;

//Intarface es un tipo abstracto
interface Persona
{
    //? señaliza que el parametro será opcional
    altura?:number;
    edad: number;
    nombre: string;
    apellido: string;
    dni: Dni;
}

const persona: Persona =
{
    edad: 28,
    nombre: 'Rodrigo',
    apellido: 'Salazar',
    dni: 11234
}
