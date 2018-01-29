"use strict";
/***************************************************************************/
// test 10: promesas, para ejecutar procesos asíncronos y que
// ejecutar cuando algo sale bien o sale mal con resolve() y reject.
let prom1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Promesa terminada");
        //SI termina bien
        // resolve();
        // Si termina normal
        reject();
    }, 1500);
});
console.log("Paso 1");
prom1.then(function () {
    console.log("Ejecutarme cuando termine bien!");
}, function () {
    console.error("Ejecutar si todo sale mal");
});
console.log("Paso 2");
/***************************************************************************/
// test 9: Destructuración de objetos y arreglos
// // 9.1:Objeto
// let avenger = {
//   nombre: "Steve",
//   clave: "Capitan America",
//   poder: "Droga"
// }
//
// // let nombre = avenger.nombre;
// // let clave = avenger.clave;
// // let poder = avenger.poder;
// // destructuración
// let { nombre, clave, poder} = avenger;
//
// // let { nombre:string, clave, poder} = avenger;
// // en nombre:string, string es un alias que se le da a nombre y no
// // un tipo de dato
//
// console.log(nombre, clave, poder);
/***************************************************************************/
// 9.2:Arreglo
// let avengers:string[] = ["Thor","Steve","Tony"];
//
// // A diferencia de la destructuracion de los objetos
// // en los objetos es secuencial.
// let [thor, capi, ironman] = avengers;
// console.log(thor, capi, ironman);
//
// let [, , ironman2] = avengers;
// console.log(ironman2);
/***************************************************************************/
// test 8: aplicación de la función flecha
// 8.1
// let hulk = {
//   nombre: "Hulk",
//   smash(){
//     setTimeout(function(){
//       console.log(this.nombre + " smash!!");
//     },1500)
//   }
// }
// hulk.smash();
//#> undefined smash!!
/***************************************************************************/
// // 8.2
// let nombre = "Pedro";
// let hulk = {
//   nombre: "Hulk",
//   smash(){
//     setTimeout(function(){
//       console.log(this.nombre + " smash!!");
//     },1500)
//   }
// }
// hulk.smash();
// //#> Pedro smash!!
// 8.3 - El this no es afectado dentro de una función fecha
// let nombre = "Pedro";
// let hulk = {
//   nombre: "Hulk",
//   smash(){
//     setTimeout(() => console.log(this.nombre + " smash!!"),1500);
//   }
// }
// hulk.smash();
// //#> Hulk smash!!
/***************************************************************************/
// test 7: funciones flecha
// let miFuncion = function(a){
//   return a;
// }
//
// let miFuncionF = a => a;
// console.log(miFuncion("Funcion normal"));
// console.log(miFuncionF("Funcion flecha"));
//
// let miFuncion2 = function(a:number, b:number){
//   return a+b;
// }
//
// let miFuncion2F = (a:number, b:number) => a + b;
//
// let miFuncion3 = function (nombre:string){
//   nombre = nombre.toUpperCase();
//   return nombre;
// }
//
// let miFuncion3F = (nombre:string) => {
//   nombre = nombre.toUpperCase();
//   return nombre;
// }
/***************************************************************************/
// test 6: Parámetros obligatorios, opcionales y por defecto
// el parámetro opciones debe ir siempre al final
// function activar( quien:string,
//                   objeto:string = "batiseñal",
//                   momento?:string){
//   let mensaje:string;
//   if(momento){
//     mensaje = `${quien} activó la ${objeto} en la ${momento}`;
//   }else{
//     mensaje = `${quien} activó la ${objeto}`;
//   }
//   console.log(mensaje);
// }
// si se envía el parámetro momento, necesariamente se debe enviar
// el parámetro objeto.
// activar("Gordon", "batiseñal", "tarde");
/***************************************************************************/
// test 5: templates literales
// function getNombre(){
//   return "Edwar";
// }
//
// let nombre:string = "Edwar";
// let apellido:string = "Jaramillo";
// let edad:number = 33;
//
// // let texto = "Hola, "+nombre+" "+apellido+"("+edad+")";
// let texto = `Hola,
// ${nombre}
// ${apellido}(${edad})`;
// console.log(texto);
//
// let texto2:string = `${1 + 2} / ${getNombre()}`;
// console.log(texto2);
/***************************************************************************/
// test 4: tipos de datos
// let nombre:string = "Peter";
// let numero:number = 123;
// let booleano:boolean = true;
//
// let hoy:Date = new Date();
//
// hoy = new Date("2018-01-29");
//
// let cualquiera:any;
//
// cualquiera=nombre;
// cualquiera=numero;
// cualquiera=booleano;
// cualquiera=hoy;
//
// let spiderman = {
//   nombre: "Peter",
//   edad: 20
// }
//
// spiderman = {
//   nombre: "Juan",
//   edad: 33
// }
// , poder: "Paredes" // es un error porque no esta definido
/***************************************************************************/
// test 3:constantes, fuera y dentro de uns scope se
// puede definir una misma constante, como con variables let
// const OPCIONES = "todas";
// if(true){
//   const OPCIONES = "123";
// }
/***************************************************************************/
// test 2: variables let
// let mensaje = "Hola!!";
//
// if(true){
//   let mensaje = "Adios!";
// }
// console.log(mensaje);
/***************************************************************************/
// test 1
// function saludar(nombre:string){
//   console.log("Hola "+nombre);
// }
//
// var wolverine = {
//   nombre: "Logan"
// }
//
// saludar(wolverine.nombre.toUpperCase());
