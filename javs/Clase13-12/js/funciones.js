/*****************************************************
                    FUNCIONES 
******************************************************/

//Funcion declarada
function miFuncion(a, b){
    console.log(arguments.length);
    console.log('la suma es:' + (a + b));
}

miFuncion(3, 5);

//return dentro de la funcion(devuelva retorne algun valor)
function miReturn(a, b){
    return a + b;
}

let resultado = miReturn(4, 5);
console.log(resultado);

//Funcion tipo expresion
//Declaracion 

let sumar = function(a, b) {return a * b};
resultado = sumar(2, 4);
console.log(typeof sumar);
console.log(resultado);

//Funciones de tipo Self-Invoking
//porq son funciones que llaman asi mismas conocidas como funciones anonimas no muy comunes pero utiles en algunos casos

(function(a, b) {
    console.log('Ejecutando funcion:'+ (a+b));

})(3,4);    

//Funciones anonimas
setTimeout(function (){
    console.log('Hola desde aca ')
},500);  //despues de ese tiempo se ejecuta

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    direccion: {
        ciudad: 'Mexico',
        zip: 12345,
        lat: 14.3232,
        lng: 34.9233
    },

    saluda() {
        return 'Hola soy' +  this.nombre;
    }
};
console.log(persona.saluda());


//Fun tipo flecha ()
//se mantiene con una dorma concisa

const sumarValores = (x, y) => x + y;
console.log(sumarValores(5, 7));

const operaciones = { sumar: (a, b) => a + b, restar: (a, b) => a - b, multiplicar: (a, b) => a * b, dividir: (a, b) => a / b };
console.log(operaciones.sumar(1, 2));
console.log(operaciones.restar(1, 2));
console.log(operaciones.multiplicar(1, 2));
console.log(operaciones.dividir(1, 2));


