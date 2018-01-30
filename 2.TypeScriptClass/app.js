"use strict";
//Definir clase y constructor en typescript
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Sin nombre";
        this.equipo = "";
        this.nombreReal = "";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        // console.log("Se ejecutó el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "cap", "Scott Lang");
console.log(antman);
