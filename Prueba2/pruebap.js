// Gestión de Inventario y Ventas Avanzada 

//1 Gestion de Inventario
class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(nombre, precio, cantidad, categoria) {
        this.productos.push({
            nombre,
            precio,
            cantidad,
            categoria
        });
    }

     
    filtrarCategoria(categoria) {
        return this.productos.filter(producto => producto.categoria === categoria);
    }
    listarProductos(orden = 'asc') {
        return this.productos.sort((a, b) => a.precio - b.precio);
    }
}



// Registro de Ventas
class Venta {
    constructor(inventario) {
        this.inventario = inventario;
        this.ventas = [];
    }

    
    realizarVenta(nombreProducto, cantidad) {
        const producto = this.inventario.productos.find(p => p.nombre === nombreProducto);
        if (!producto) {
            console.log(`Error: El producto ${nombreProducto} no existe.`);
            return;
        }
        if (producto.cantidad < cantidad) {
            console.log(`Error: Cantidad insuficiente de ${nombreProducto}.`);
            return;
        }
        producto.cantidad -= cantidad;
        this.ventas.push({
            nombreProducto,
            cantidad,
            fecha: new Date()
        });
    }


    //Descuento Personalizado
    aplicarDescuento(categoria, porcentaje) {
        this.inventario.productos.forEach(producto => {
            if (producto.categoria === categoria) {
                producto.precio -= producto.precio * (porcentaje / 100);
            }
        });
    }

    generarReporte() {
        let totalIngresos = 0;
        let productosVendidos = {};

        this.ventas.forEach(venta => {
            const producto = this.inventario.productos.find(p => p.nombre === venta.nombreProducto);
            totalIngresos += producto.precio * venta.cantidad;
            productosVendidos[venta.nombreProducto] = (productosVendidos[venta.nombreProducto] || 0) + venta.cantidad;
        });

        const productoMasVendido = Object.keys(productosVendidos).reduce((a, b) => productosVendidos[a] > productosVendidos[b] ? a : b);

        const inventarioPorCategoria = this.inventario.productos.reduce((acc, producto) => {
            if (!acc[producto.categoria]) acc[producto.categoria] = [];
            acc[producto.categoria].push(producto);
            return acc;
        }, {});

        Object.keys(inventarioPorCategoria).forEach(categoria => {
            inventarioPorCategoria[categoria].sort((a, b) => a.precio - b.precio);
        });

        console.log("Reporte de Inventario Actualizado:", inventarioPorCategoria);
        console.log("Ventas Realizadas:", this.ventas);
        console.log("Total de Ingresos:", totalIngresos);
        console.log("Producto más Vendido:", productoMasVendido);
    }



}

//INVENTARIO INICIAL
const inventario = new Inventario();
inventario.agregarProducto('Vestido', 31, 50, 'Ropa');
inventario.agregarProducto('Tacos', 41, 45, 'Calzado');
inventario.agregarProducto('Tennis', 32, 45, 'Calzado');
inventario.agregarProducto('bermuda', 89, 50, 'Ropa');
inventario.agregarProducto('Anillo', 110, 20, 'Joyas');
inventario.agregarProducto('Cadena', 100, 19, 'Joyas');
inventario.agregarProducto('Carteras', 64, 38, 'Acsesorios');
inventario.agregarProducto('Pantalon', 60, 50, 'Ropa');


const venta = new Venta(inventario);
venta.realizarVenta('Pantalon', 8);
venta.realizarVenta('Zapatos', 2);
venta.realizarVenta('Vestido', 11)
venta.realizarVenta('Anillo', 6)
venta.aplicarDescuento('joyas', 10);
venta.generarReporte();

