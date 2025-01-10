
class Conductor {
    #licencia; 
    constructor(nombre, licencia) {
      this.nombre = nombre;
      this.#licencia = licencia;
      this.rutas = []; // Almacena las rutas asignadas
    }
  
    // Métodos
    registrarRuta(ruta) {
      this.rutas.push(ruta);
      console.log(`${this.nombre} ha registrado una nueva ruta: ${ruta}`);
    }
  
    getLicencia() {
      return this.#licencia;
    }
  }
  

  class Vehiculo {
    #estado; 
    constructor(modelo, placa) {
      this.modelo = modelo;
      this.placa = placa;
      this.#estado = 'disponible'; // Por defecto disponible
    }
  
    asignar() {
      if (this.#estado === 'disponible') {
        this.#estado = 'asignado';
        console.log(`Vehículo ${this.placa} asignado.`);
      } else {
        console.log(`Vehículo ${this.placa} no está disponible.`);
      }
    }
  
    liberar() {
      this.#estado = 'disponible';
      console.log(`Vehículo ${this.placa} liberado.`);
    }
  
    getEstado() {
      return this.#estado;
    }
  }
  

  class Ruta {
    constructor(origen, destino, tiempoEstimado) {
      this.origen = origen;
      this.destino = destino;
      this.tiempoEstimado = tiempoEstimado;
    }
  
    detalles() {
      return `Ruta: ${this.origen} -> ${this.destino} | Tiempo estimado: ${this.tiempoEstimado} mins`;
    }
  }
  
  // hereda de Conductor
  class ConductorVIP extends Conductor {
    constructor(nombre, licencia) {
      super(nombre, licencia);
      this.vehiculoPreferido = null;
    }
  
    asignarVehiculoPreferido(vehiculo) {
      this.vehiculoPreferido = vehiculo;
      console.log(`${this.nombre} tiene como vehículo preferido el modelo ${vehiculo.modelo}.`);
    }
  }
  
  // Ejemplo de Uso
  
  const conductor1 = new Conductor('Juan Pérez', 'ABC123');
  const conductorVIP1 = new ConductorVIP('María López', 'XYZ789');
  
  
  const vehiculo1 = new Vehiculo('Toyota Corolla', 'XYZ123');
  const vehiculo2 = new Vehiculo('Honda Civic', 'ABC456');
  
  
  const ruta1 = new Ruta('Centro', 'Norte', 30);
  const ruta2 = new Ruta('Sur', 'Este', 45);
  
  conductor1.registrarRuta(ruta1.detalles());
  conductorVIP1.registrarRuta(ruta2.detalles());
  
  // Asignar vehículo a un conductor VIP
  conductorVIP1.asignarVehiculoPreferido(vehiculo1);
  
  // Vehículo asignado
  vehiculo1.asignar();
  vehiculo1.getEstado();
  