"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// crear un único archivo para importar
// import {Xmen} from "./clases/xmen.class"
// import {Villano} from "./clases/villanos.class"
var index_1 = require("./clases/index");
var wolverine = new index_1.Xmen("Logan", "Wolverine");
var lex = new index_1.Villano("Lex Luthor", "Atacar");
wolverine.imprimir();
lex.imprimirPlan();
