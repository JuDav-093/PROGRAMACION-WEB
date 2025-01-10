/*****************************************************
                        ARREGLOS
******************************************************/

//declaracion de arreglos

const arr = new Array(10);
const arr1 = [];
console.log(arr);

const numeros = [1, 2, 3, 4, 5];
let colores = ["rojo", "verde", "azul"];

//Ejercicio

let videJuegos = ["Mario 3", "Megaman", "soccer"];
console.log(videJuegos[2]);

let arregloCosas = [
    true,
    123,
    "fernando",
    1+2,
    function(){},
    ()=>{},
    ['S', 'Peiculas']
]

console.log({arregloCosas});

console.log(arregloCosas[0]);


//METODOS
//Met Funcionales
//map(), filter(), reduce()

//map
let numerosMap = [1, 2, 3, 4, 5, 6];
let cuadrados = numerosMap.map(num=> num*num);
console.log(cuadrados);

//filter
let numeroFilter = [1, 2, 3, 4, 5, 6];
let pares = numeroFilter.filter(num=> num % 2 != 0);    //!=0 impares,  ==0 pares
console.log(pares);

//Reduce (REDUCE TODOS LOS ELEMENTOS HASTA UN SOLO VALRO)
let numeroReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maximo = numeroReduce.reduce((acumular, num)=>(num < acumular ? num : acumular), numeroReduce [0] );    
console.log(maximo);


//VENTAJAS



//AGREGAR elementos dentro de un array
// push() agrega uno o mas elementos al final del arreglo

let p = [1, 2, 3, 4]
p.push(5);
console.log(p);


//unshit() agrega 1 o mas al inicio del array
let q = [1, 2, 3, 4]
q.unshift(5);
console.log(q);

//splice() agrega o elimina elementos en cualquier posicion dentro del array.
let u = [1, 2, 3, 4]
u.splice(3, 0, 5,); //agrega el num 5 en la posicion 1 sin eliminar elementos
console.log(u);

//MODIFICAR elementos dentro de un array
//podemos acceder a un elemento directamente por su indice y modificarlo
let i = ['Ana', 'Juan', 'Pedro', 'Jose'];
i[2] = 'Maria'; //modifica el elemento en su posicion
console.log(i);

//si deseamos modificar el arreglo de fomra inmutable(sin cambiar en su contexto) se puede utilizar el metodo map()
// el metodo map() crea un nuevo arreglo con los valores modificados
//let arregloMap = ['Azul', 'Naranja', 'Amarillo', 'Negro'];
let arregloMap = [10, 20, 33, 26];
let arregloNuevo = arregloMap.map(num => num === 10 ? 5 : num);
console.log(arregloNuevo);

//splice() tambien se puede usar 
let z = [1, 2, 3];
z.splice(1, 1, 5);
console.log(z)

//ELIMINAR elementos de un array
//pop() elimina el ultimo elementp del arreglo
let arregloE =  ['Azul', 'Naranja', 'Amarillo', 'Negro'];
arregloE.pop();
console.log(arregloE);

//Shift() elimina el primer elemento de un array
let arregloS =  ['Azul', 'Naranja', 'Amarillo', 'Negro'];
arregloS.pop();
console.log(arregloS);

//splice() para eliminar cualquier elemento dentro de un arreglo
let arregloSp =  ['Azul', 'Naranja', 'Amarillo', 'Negro'];
arregloSp.splice(0, 1);
console.log(arregloSp);


