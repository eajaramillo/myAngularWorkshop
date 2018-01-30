// crear un único archivo para importar
// import {Xmen} from "./clases/xmen.class"
// import {Villano} from "./clases/villanos.class"
import {Xmen, Villano} from "./clases/index"

let wolverine = new Xmen("Logan","Wolverine");
let lex = new Villano("Lex Luthor","Atacar");

wolverine.imprimir();
lex.imprimirPlan();
