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

