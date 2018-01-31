"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Uso de Let y Const
console.log("******** Uso de let y const ********");
//Las variables var se definen como let
var nombre = "Ricardo Tapia";
var edad = 23;
// las constantes se definen con const y en mayúsculas
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log("Las variables var se definen como let");
console.log("las constantes se definen con const y en mayúsculas");
// Cree una interfaz que sirva para validar el siguiente objeto
console.log("******** Crear interfaz para validar objeto ********");
function imprimirPersonaje(personaje) {
    console.log("> Nombre personaje: " + personaje.nombre);
    console.log("> Artes marciales: " + personaje.artesMarciales);
}
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
console.log("Se creó la interface PERSONAJE para validar y definir el objeto batman:PERSONAJE");
imprimirPersonaje(batman);
// Convertir esta funcion a una funcion de flecha
console.log("******** Crear función flecha ********");
function resultadoDoble(a, b) {
    return (a + b) * 2;
}
var resultadoDobleF = function (a, b) { return (a + b) * 2; };
// Calcular el resultado de (a + b) * 2, función normal
var number1 = 2;
var number2 = 2;
console.log("Resultado de (a + b) * 2 [a=" + number1 + ", b=" + number2 + "], con funci\u00F3n normal = " + resultadoDoble(number1, number2));
console.log("Resultado de (a + b) * 2 [a=" + number1 + ", b=" + number2 + "], con funci\u00F3n flecha = " + resultadoDobleF(number1, number2));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
console.log("******** Función con parámetros obligatorios, por defecto y opcionales ********");
function getAvenger(nombre, arma, poder) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un(a) " + arma;
    }
    console.log(mensaje);
}
;
getAvenger("Hulk");
getAvenger("Spiderman", "Telaraña");
getAvenger("Edwar", "Teclado", "Programar");
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un número.
console.log("******** Crear clase rectángulo ********");
var Forma = /** @class */ (function () {
    function Forma(base, altura) {
        this.base = 0;
        this.altura = 0;
        this.base = base;
        this.altura = altura;
    }
    return Forma;
}());
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}(Forma));
var rectangulo = new Rectangulo(4, 6);
console.log("El área del rectángulo es: " + rectangulo.calcularArea());
