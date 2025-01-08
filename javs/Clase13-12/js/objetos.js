/*****************************************************
                    OBJETOS 
******************************************************/

//Caracteristicas Principales Obje JS
//Claves y Valores
//Las claves son cadenas o simbolos unicos y los valores asignados a los objetos pueden ser de cualquier tipo
//tipo: cadena, numero, funciones, otros tipos de objetos, etc

//Dinamismo:
//los objetos pueden ejecutarse en tiempo de ejecucion, (agregar, modficar, eliminar propiedades de un OJ)

//Nota Especial: los metodos son funciones asociados a un objeto
/*Objetos Contienen propiedades y metodos*/

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 35
}
console.log(persona);

//incluir metodos en los objetos
let people = {
    name: 'Maria',
    lastname: 'Cruz',
    age: 23,
    fullName: function (){
        return this.name + ' ' + this.lastname;
    }
}
console.log(people.fullName());
const people2= {
    name: 'May',
    lastname: 'Dier',
    age: 21,
    saludo: function(){
        console.log(`Hello, my name is ${this.name}`)

    }
} 
console.log(people2);
people2.saludo()

//usando constructor
//otra forma, crear un objeto vacio y agregarle propiedades posteriormente

const persona1 = new Object();
     persona1.nombre = "Kevin";
     persona1.apellido  = "Velez";
     persona1.saludar = function () {
        console.log(`Hola, mi nombre is  ${this.nombre}`);  
     }
     console.log(persona1.nombre);
     persona1.saludar();

//usando la clase object.create()
//esta forma permite crear un obj basado en un prototipo
const prototipopersona = {
    saludar: function(){
        console.log(`Hola desde prototipo, soy ${this.nombre}`)
    }
}
const persona2 = Object.create(prototipopersona);
persona2.nombre = 'Carlos';
persona2.saludar();

//Usando clases (introducido desde ES6 hasta la actualidad)
//proporciona una sintaxis mas estructurada para crear objetos

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido
    }
    saludar(){
        console.log(`Hola desde clases, soy ${this.nombre}`)
    }
}
const persona3 = new Persona('Ana','Rios');
persona3.saludar();

//Usando funciones constructoras
//forma clasica, no muy frecuente 
function Persona1(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function (){
        console.log(`Hola desde funciones, soy ${this.nombre}`);
    }
}
const persona4 = new Persona1 ('Luis', 45);
persona4.saludar();

//Manipulacion de los datos o propiedades obj
//1. Agregar o modif propiedades

const persona5 = {nombre: 'Pedro'};
persona5.edad = 34;
persona5.nombre = 'Pablo';
console.log(persona5);

//2. Eliminar
//delete persona5.edad;
console.log(persona5);

//3. Iterar sobre las propiedades
for (nombrePropiedad in persona5){
    console.log(nombrePropiedad);
    console.log(persona5[nombrePropiedad]);
}

for (let clave in persona5){
    console.log(`${clave}: ${persona5[clave]}`)
}

//4. verificar propiedades

console.log('name' in persona5);
console.log('nombre' in persona5);
console.log(persona5.hasOwnProperty('age')); 
//hasOwnProperty propiedad mas usas para verificacion

//Metodos Utiles para trabajar con Ob
//1 object.keys().- Devuelve en un array con las claves del Objeto
console.log(Object.keys(persona5));

//2. Object.values Devuelve en un array
console.log(Object.values(persona5));

//3. Object.entries().- Devuelve array de pares (clavez y valores)
console.log(Object.entries(persona5));

//4 Objet.assign(),- copia propiedades de un obj a otro
const copia = Object.assign({}, persona5)
console.log(copia);

//5 Object.freeze(),- congela un objeto para evitar modificaciones
//Object.freeze(persona5);

//6 Object.seal(),-modificar propiedades existentespero no agregar o eliminar prop
Object.seal(persona5);
persona5.ciudad = 'Quito';
console.log(persona5);

//NOTA
//impresion de los valores de las propiedades de un objeto

let personaArray = Object.values(persona5);
console.log(personaArray);

let personaString = JSON.stringify(persona5);
//JSON es una notacion, es un objeto
//Stringify convierte cadena a string cada propiedd
console.log(personaString);


