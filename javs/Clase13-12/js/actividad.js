// Función calcularPromedio
function calcularPromedio(a, b, c) {
    if (![a, b, c].every(num => typeof num === 'number')) {
      console.log("Solo Puede ingresar números.");
      return;
    }
    return (a + b + c) / 3;
  }
  
  // Función expresada
  const determinarMayor = function(a, b) {
    if (![a, b].every(num => typeof num === 'number')) {
      console.log("Ambos parámetros deben ser números.");
      return;
    }
    return a > b ? a : b;
  };
  
  // Función flecha
  const esPar = num => {
    if (typeof num !== 'number') {
      console.log("Solo se puede ingresar números.");
      return;
    }
    return num % 2 === 0;
  };
  
  //funcion autonoma
  (() => {
    try {
      const [num1, num2, num3] = [10, 15, 20];
      console.log(`Promedio: ${calcularPromedio(num1, num2, num3)}`);
      console.log(`Mayor: ${determinarMayor(num1, num2)}`);
      console.log(`${num1} es ${esPar(num1) ? "par" : "impar"}`);
    } catch (error) {
      console.error(error.message);
    }
  })();
  






  class Conductor {
    #licencia; 
    constructor(nombre, licencia) {
      this.nombre = nombre;
      this.#licencia = licencia;
      this.rutas = []; // Almacena las rutas asignadas
    }
  }


  