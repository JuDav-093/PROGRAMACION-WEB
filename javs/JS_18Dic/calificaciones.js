
let estudiantes = [
    ["Michell", [14, 16, 18]],
    ["Eliza", [10, 12, 9]],
    ["Luis", [7, 5, 6]],
    ["Ana", [16, 17, 15]],
    ["Javier", [11, 13, 10]],
    ["Sofía", [18, 19, 20]],
    ["Kevin", [8, 6, 7]],
    ["Lorena", [14, 15, 13]],
    ["Miguel", [9, 10, 8]],
    ["Eliana", [12, 14, 13]]
];

let nuevasCalificaciones = [
    [15, 14], [9, 10], [16, 18], [5, 6], [14, 13],
    [19, 20], [10, 9], [12, 11], [8, 9], [6, 7]
];


for (let i = 0; i < estudiantes.length; i++) {
    let actuales = estudiantes[i][1];
    let nuevas = nuevasCalificaciones[i];
    let combinadas = [];
    for (let j = 0; j < actuales.length; j++) {
        combinadas[combinadas.length] = actuales[j];
    }
    for (let j = 0; j < nuevas.length; j++) {
        combinadas[combinadas.length] = nuevas[j];
    }
    estudiantes[i][1] = combinadas;
}


let mejorPromedio = { nombre: "", promedio: 0 };
let peorPromedio = { nombre: "", promedio: 20 }; 

for (let i = 0; i < estudiantes.length; i++) {
    let estudiante = estudiantes[i];
    let calificaciones = estudiante[1];

    
    let suma = 0;
    for (let j = 0; j < calificaciones.length; j++) {
        suma += calificaciones[j];
    }
    let promedio = suma / calificaciones.length;


    let clasificacion = "";
    if (promedio >= 16) {
        clasificacion = "Excelente";
    } else if (promedio >= 12) {
        clasificacion = "Bueno";
    } else if (promedio >= 8) {
        clasificacion = "Aprobado";
    } else {
        clasificacion = "Reprobado";
    }
    estudiante[2] = clasificacion;

    /
    let maximo = calificaciones[0];
    let minimo = calificaciones[0];
    for (let j = 1; j < calificaciones.length; j++) {
        if (calificaciones[j] > maximo) {
            maximo = calificaciones[j];
        }
        if (calificaciones[j] < minimo) {
            minimo = calificaciones[j];
        }
    }
    estudiante[3] = promedio;
    estudiante[4] = maximo;
    estudiante[5] = minimo;

    
    if (promedio > mejorPromedio.promedio) {
        mejorPromedio = { nombre: estudiante[0], promedio: promedio };
    }
    if (promedio < peorPromedio.promedio) {
        peorPromedio = { nombre: estudiante[0], promedio: promedio };
    }
}


for (let i = 0; i < estudiantes.length; i++) {
    let estudiante = estudiantes[i];
    console.log("Nombre: " + estudiante[0]);
    console.log("Calificaciones: " + estudiante[1].join(", "));
    console.log("Promedio: " + (Math.round(estudiante[3] * 100) / 100));
    console.log("Máximo: " + estudiante[4]);
    console.log("Mínimo: " + estudiante[5]);
    console.log("Clasificación: " + estudiante[2]);
    console.log("----------------------");
}

console.log("Estudiante con mejor promedio: " + mejorPromedio.nombre + " (" + mejorPromedio.promedio + ")");
console.log("Estudiante con peor promedio: " + peorPromedio.nombre + " (" + peorPromedio.promedio + ")");
