//Definición de clase en typescript
class Avenger {
    
    nombre:string = "Antman";
    equipo:string;
    nombreReal:String;
    
    puedePelear:boolean = true;
    peleasGanadas:number = 1;

    //constructor
    constructor( nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

}

let antman:Avenger = new Avenger("Antman", "Capitan America", "Scott lang");

console.log(antman);
