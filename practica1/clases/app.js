//Definición de clase en typescript
var Avenger = /** @class */ (function () {
    //constructor
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Antman";
        this.puedePelear = true;
        this.peleasGanadas = 1;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "Capitan America", "Scott lang");
console.log(antman);
