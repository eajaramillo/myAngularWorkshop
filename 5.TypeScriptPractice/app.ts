
// Uso de Let y Const
console.log("******** Uso de let y const ********");
//Las variables var se definen como let
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

// las constantes se definen con const y en mayúsculas
const PERSONAJE:{nombre:string, edad:number} = {
  nombre: nombre,
  edad: edad
};

console.log("Las variables var se definen como let");
console.log("las constantes se definen con const y en mayúsculas");


// Cree una interfaz que sirva para validar el siguiente objeto
console.log("******** Crear interfaz para validar objeto ********");
interface Personaje {
  nombre:string;
  artesMarciales:string[];
}

function imprimirPersonaje(personaje:Personaje){
  console.log("> Nombre personaje: "+personaje.nombre);
  console.log("> Artes marciales: "+personaje.artesMarciales);
}

let batman:Personaje = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

console.log("Se creó la interface PERSONAJE para validar y definir el objeto batman:PERSONAJE");
imprimirPersonaje(batman);

// Convertir esta funcion a una funcion de flecha
console.log("******** Crear función flecha ********");
function resultadoDoble( a:number, b:number ){
  return (a + b) * 2
}

let resultadoDobleF = (a:number,b:number) => (a + b) * 2;

// Calcular el resultado de (a + b) * 2, función normal
let number1:number = 2;
let number2:number = 2;
console.log(`Resultado de (a + b) * 2 [a=${number1}, b=${number2}], con función normal = ${resultadoDoble(number1,number2)}`);
console.log(`Resultado de (a + b) * 2 [a=${number1}, b=${number2}], con función flecha = ${resultadoDobleF(number1,number2)}`);

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
console.log("******** Función con parámetros obligatorios, por defecto y opcionales ********");
function getAvenger( nombre:string, arma:string = "arco", poder?:string ){
  let mensaje;
  if( poder ){
     mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  }else{
     mensaje = `${nombre} tiene un(a) ${arma}`;
  }
  console.log(mensaje);
};

getAvenger("Hulk");
getAvenger("Spiderman","Telaraña");
getAvenger("Edwar","Teclado","Programar");

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un número.
console.log("******** Crear clase rectángulo ********");
class Forma{
  base:number = 0;
  altura:number = 0;

  constructor(base:number,altura:number){
    this.base = base;
    this.altura = altura;
  }
}

class Rectangulo extends Forma{
  calcularArea():number{
    return this.base * this.altura;
  }
}

let rectangulo:Rectangulo = new Rectangulo(4,6);

console.log("El área del rectángulo es: "+rectangulo.calcularArea());
