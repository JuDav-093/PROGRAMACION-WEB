/*****************************************************
                SENTENCIAS DE CONTROL 
******************************************************/

// If/Else
//var, let const
let numero = 10;
if (numero == 1){
    console.log("numero 1");
}else if (numero == 2){
    HTMLFormControlsCollection.warn("numero 2");
}else if(numero == 3){
    console.warn("numero 3");
}
else {
    console.log("no es un numero"); 
}

//ejercoicio se puede usar if sin llaves

let mes = 4;
let estacion;

if (mes == 1 || mes == 2 || mes == 3)
    estacion = "invierno";
else if (mes == 4 || mes == 5 || mes == 6)
    estacion = "otonio";
else if (mes == 7 || mes == 8 || mes == 9)
    estacion = "primavera";
else if (mes == 10 || mes == 11 || mes == 12)
    estacion = "verano";
else
    estacion = " no es una estacion"
console.warn(estacion);


//calacular hoa del dia//
/*
6am - 12am buenos dias
12am - 18pm buenas tardes
18pm -23 am buenas noches
24 pm - 6am durmiendo
*/

let horaDia = 11;
let mensaje;
/*if(horaDia >= 6 && horaDia <= 11){
    mensaje = "Buenos dias";    
}
else if(horaDia >= 12 && horaDia <= 18){
    mensaje = "Buenos tardes";    
}
else if(horaDia >= 19 && horaDia <= 23){
    mensaje = "Buenos noches";    
}
else if(horaDia >= 0 && horaDia < 6){
    mensaje = "durmiendo";    
}
else {
    mensaje = "no corresponde la hora";
}
console.warn(mensaje);*/

//Switch

let mesE = 8;
let estacionI = 'Estacion';
switch (mesE){
    case 1: case 2: case 3:
        estacion = "invierno";
        break;
    case 5: case 6: case 7:
        estacion = "otoño";
        break;
    case 8: case 9: case 10:
        estacion = "primavera";
        break;
    case 11: case 12: case 13:
        estacion = "verano";
        break;
}
console.warn(estacion);

//otra forma usar if

if(horaDia >= 6 && horaDia <= 11){
    mensaje = "Buenos dias";    
}
else if(horaDia >= 12 && horaDia <= 18){
    mensaje = "Buenos tardes";    
}
else if(horaDia >= 19 && horaDia <= 23){
    mensaje = "Buenos noches";    
}
else if(horaDia >= 0 && horaDia < 6){
    mensaje = "durmiendo";    
}
else {
    mensaje = "no corresponde la hora";
}
console.warn(mensaje);