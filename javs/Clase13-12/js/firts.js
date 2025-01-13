//Declaracion JS
var nombre = "Ricardo";
var edad;
edad = 25;
var apellido = "Vargas";
console.log("mi nombre es "+ nombre +" "+ apellido);
console.log("mi edad es  "+ edad);
console.log("mi nombre es "+ nombre +" "+ apellido +" y mi edad es "+ edad);
//var, let, const
let x = 10;
let y = 20;
let z = x + y;
console.log(z);

/*Ejemplos tipos de datos de JavaS */
//tipos de Datos String
let nombrePersona = "Ricardo";
console.log(nombre);
let nombrePersona1;
nombrePersona1 = "Ricardo";
console.log(nombrePersona1);


let numero = 100;
console.log(numero); 100

//tipo de dato Objeto object
let persona = {
    nombre: "Ricardo",
    apellido: "Vargas",
    edad: 25
}

console.log(persona);

//Tipo de dato Tupeof
let let1 = "Ricardo";
console.log(typeof let1); 'string'

let let2 = 25;
console.log(typeof let2); 'number'

let let3 = false;
console.log(typeof let3); 'boolean'

let let4 = BigInt;
console.log(typeof let4); 'bigint'

let let5 = [1, 2 ,3 ,4 ,5 ,6, 7, 8];
console.log(typeof let5); 'objet'

//Tipo de dato tipo funcion
function saludar() {}
console.log(typeof saludar); 'function'

//Tipo de datos Symbol
let simbolo = Symbol("mi simbolo"); //puede ser utilizado por un identificador unico
console.log(typeof simbolo); 'symbol'

//tipo datos clase lo mismo q realizar una funcion 
class Persona {
    constructor(nombres, apellidos, edad){
        this.nombre = nombres;
        this.apellidos = edad;
        this.edad = edad;

    }
}
console.log(typeof Persona); 'funtion'

//Tipo de dato undefine se puede utilizar como un valor
let variable;
console.log(variable); undefined
console.log(typeof variable); 'undefined'

let variable1;
console.log(variable1); null
console.log(typeof variable1); 'object'

//tipo de dato de arreglo
let autos = ["BMW", "aUDI", "MERCEDES"];
console.log(autos); ["BMW", "aUDI", "MERCEDES"]
console.log(typeof autos); 'object'

let cadenaVacia = "";
console.log(cadenaVacia); ''
console.log(typeof cadenaVacia); 'string'

//Reglas de Javas para declarar variables
//no iniciar con num
//no iniciar con simbols
//no iniciar con mayusc

//Formas Correctas de declarar una variable
let nombresCompletos = "Ricardo Vargas";
let nombres_completos = "Ricardo Vargas";
//etc

//existen variables reservadas en Javascript
//var
//let
//const, etc 

/*
Operadores en JavaS
*/

//Op Arimetricos
// sumas 
// Resta
// Multiplicacion
// Division /
// Modulo %

let numero1 = 3;
let numero2 = 2;

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);
console.log(numero1 ** numero2);

//Operadores de incremento y decremento
//Incremento ++, para aumentar en 1
//Decremento --, para disminuir en 1

let numero3 = 3, numero4 = 2;
let numero5 = numero3 + numero4;

//Incremento
//Pre incremento primero incrementa luego asigna
numero5 = ++numero3;
console.log(numero3);
console.log(numero5); 

//post incremento
numero5 = numero4++;
console.log(numero4); 
console.log(numero5); 

//Decremento 
//Pre decremento primero incrementa luego asigna
numero5 = --numero3;
console.log(numero3);  
console.log(numero5); 

//post decremento
numero5 = numero4--;
console.log(numero4); 
console.log(numero5);

//Precedencia de los operadores
// Los operadores se ejecutan de izquierda a derecha o de derecha a izq segun el caso

let pre1 = 2, pre2 = 3, pre3 = 4, pre4 = 5;
let pre5 = (pre1 + pre2) * pre3;
console.log(pre5); 

let pre6 = pre3 * (pre1 + pre2);
console.log(pre6);

let pre7 = pre1 + (pre2 * pre3);
console.log(pre7);

let pre8 = (pre1 * pre3) + (pre2 / pre4) / (pre1 + pre2);
console.log(pre8);

//Operadores de asignacion

let operador1 = 3, operador2 = 2;
operador1 += operador2;
console.log(operador1); 5
operador1 -= operador2;
console.log(operador1); 3

//Operadores de comparacion
// ==  compara dos variables son iguales (no es estricto)
// ===  compara dos variables son iguales y del mismo tipo(si es estricto)
// /=   
// >  
// <  
// >=  
// <=

let operador3 = 3, operador4 = "3";
console.log(operador3); 'number'

let operador10 = operador3 == operador4;
console.log(operador10); false

let operador11 = operador4 === operador4;
console.log(operador11); false

if(operador3 === operador4){
    console.log('son iguales');
}else{
    console.log('no son iguales');
}

//Determinar si un num es par
let numPI = 7;
if(numPI % 2 == 0){
    console.log('el num es par');
}else{
    console.log("el num es impar ");
}

//Determinar si una persona es menor de edad
let numME = 10;
if(numME >= 18){
    console.log('Es mayor de edad');
}else{
    console.log('es menor de edad');
}

//De un conjunto de valores, determine cuales son pares y cuales impares 


//Operadores Logicos
//AND
//OR
//NOT

let s = 8;
let valMin = 19, valorMax = 7;
if(s >= valMin && s <= valorMax){
    console.log('El valor esta dentro del rango');
}else{
    console.log('Valor no esta dentro del rango');
}

if(s >= valMin || s <= valorMax){
    console.log('Valor dentro de rango');
}else{
    console.log('Valor no esta dentro del rango');
}

//Operadores Ternarios
let resultado = (s >= valMin && s <= valorMax) ? 'el valor esta dentro del rango' : 'valor no esta dentro del rango';
console.log(resultado);

/*
CONVERSORES DE TIPOS
*/
let minumero = '20';
console.log(typeof minumero);

let minumero2 = Number(minumero);
console.log(typeof minumero2);
console.log(minumero2);

let minumero3 = Number(minumero);
console.log(typeof minumero3);
console.log(minumero2);

//parseInt() vonvierte un string a un entero (sin decimales)
//Number: convierte un valor en un numweo(puede ser entero o flotante)

console.log(parseInt('42px')); //solo la parte enuerica del string la convierte en entero
console.log(parseInt(3.1415)); //convierte solo la parte entera
console.log(parseInt("1abc")); // no existe un valor para la conversion

console.log(Number('42px')); // no se puede convertir toda la cadena
console.log(Number(3.1415)); //convierte el num el flotante
console.log(Number("1")); // no hay ningun numero en la consola

console.log(Number(true)); // true se convierte en 1
console.log(Number(false)); // false se convierte en 0
console.log(Number(null)); // null se convierte en 0
console.log(Number(undefined)); //undefined se convierte en Nan

if(isNaN(minumero2)){
    console.log("no es un numero");
}else{
    console.log("Es un numero");
}
console.log(isNaN(minumero2));
console.log(minumero2);





 