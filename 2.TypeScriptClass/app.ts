//Definir clase y constructor en typescript

class Avenger {
  nombre:string = "Sin nombre";
  equipo:string = "";
  nombreReal:string = "";

  puedePelear:boolean = false;
  peleasGanadas:number = 0;

  constructor(nombre:string, equipo:string, nombreReal:string){
    // console.log("Se ejecutó el constructor");
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }
}

let antman:Avenger = new Avenger("Antman", "cap", "Scott Lang");
console.log(antman);
