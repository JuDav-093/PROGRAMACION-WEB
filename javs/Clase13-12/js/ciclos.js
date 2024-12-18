/*****************************************************
                SENTENCIAS DE CONTROL 
******************************************************/


//Ciclo for

const heroes = ["Batman", "Superman", "Hulck", "Aquaman"];

console.warn("For tradicional");
for (let i = 0; i < heroes.length; i++){
    console.warn(heroes[i]);
}

console.warn("****For in****");
for (let i in heroes){
    console.warn(heroes[i]);
}

console.warn("****For of****");
for (let heroe of heroes){
    console.warn(heroes);
}


//usos de la declaracion for 
// usamos for tradicional cuando necesitamos el control total de los indices del array
// usamos for in para el manejo de objetos
// usamos for or para iterar los valores directamente de un iterable(arrays, cadenas de textos"string"", map, set, nodelist.)

//continue y break dentro de un ciclo for 

/*for (let contador = 0; contador < 10; contador++){
    if(contador % 2 != 0) {
        continue; // ir a la sig iteracion
    }
    console.log(contador);
}*/

const carros = ["Ford", "Mazda", "Honda", "Toyota"];
for (let contador = 0; contador < carros.length; contador++){
    if(contador == 2) {
        continue; // ir a la sig iteracion
    }
    console.log(carros[contador] );
}


//While
let i = 0;
while (carros[i]){
    if(i ==1){
        i++;
        continue;
    }
    console.warn(carros[i]);
    i++;
}


