//inventario Productos
let inventario = {
    producto1: { nombre: 'Manzanas', precio: 2.5, cantidad: 50 },
    producto2: { nombre: 'Naranjas', precio: 3.0, cantidad: 30 },
    producto3: { nombre: 'Plátanos', precio: 1.2, cantidad: 100 },
    producto4: { nombre: 'Peras', precio: 1.8, cantidad: 20 },

    ventaProducto: function (nombre, cantidad) {
        for (let clave in this) {
            if (this[clave]?.nombre === nombre) {
                if (this[clave].cantidad >= cantidad) {
                    this[clave].cantidad -= cantidad;
                    console.log(`Venta realizada: ${cantidad} ${nombre} vendidos.`);
                } else {
                    console.log(`Error: No hay suficiente stock de ${nombre}.`);
                }
                return;
            }
        }
        console.log(`Error: Producto ${nombre} no encontrado.`);
    },

    aplicarDescuento: function () {
        const porcentaje = 10; 
        const factorDescuento = 1 - porcentaje / 100;

        for (let clave in this) {
            if (this[clave]?.precio !== undefined) {
                this[clave].precio = Math.max(0, this[clave].precio * factorDescuento); //Math para evitar valores -
            }
        }
        console.log(`Descuento del ${porcentaje}% aplicado a todos los productos.`);
    }
};

//Sellar
Object.seal(inventario);

//Métodos del objeto
console.log('Inventario inicial:', JSON.stringify(inventario, null, 2));

inventario.ventaProducto('Manzanas', 10);
inventario.ventaProducto('Naranjas', 40); 
inventario.ventaProducto('Uvas', 5); 

inventario.aplicarDescuento(10);

// Inventario final
console.log('Inventario final:', JSON.stringify(inventario, null, 2));
