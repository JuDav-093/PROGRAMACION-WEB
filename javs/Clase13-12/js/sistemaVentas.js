//Sistema de Ventas
//Creacion de la clase Producto
class Producto{
    static contadorProductsos =0;

    constructor(nombre,precio,categoria,stock){
        this._idProducto = ++Producto.contadorProductsos;
        this._nombre = nombre;
        this._precio = precio;
        this._categoria = categoria;
        this._stock = stock;    
    }

    get idProducto(){
        return this._idProducto
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        this._precio = precio;
    }

    get categoria(){
        return this._categoria
    }
    set categoria(categoria){
        this._precio = precio;
    }
    get stock(){
        return this._stock
    }
    set stock(stock)[
        this._stock = stock
    ]
    disminuirStock(){
        if (this._stock > 0) {
            this._stock--;
        } else {
            console.log(`El producto ${this._nombre} no tiene suficiente stock.`);
        }
    }

   
    toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}, categoria: ${this._categoria}, stock: ${this._stock}`;
    }
}

/*probando
let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Vestido', 120);

console.log(producto1.toString());
console.log(producto2.toString());
*/

//Creacion clase orden

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        //Verificar si no hemos superado el maximo de productos existentes
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            if(producto.stock > 0) {
                this._productos.push(producto);
                producto.disminuirStock();      //para disminuir stock cuando se vende
            }else{
                console.log('No se puede agregar el producto ${producto.nombre} por falta de Stock');
            }
            //Otra sintaxis
            //this._productos[this._contadorProductosAgregados++]= producto;
        } else {
            console.log('No se puede agregar mas productos a la orden')
        }
    }
    CalcularTotal(){
        let totalVenta = 0;    
        for(const producto of this._productos){
            let descuento = 0;      //Descuento en producto/Categoria
            if (producto.categoria ===  'Electronica'){
                descuento = producto.precio * 0.1;      //Aplicando 10% solicitado

            }
            totalVenta += producto.precio - descuento; //totalVenta = totalventa + producto.precio - descuento;
        }
        return totalVenta;
    }

    //Impuesto (16%)
    calcularImpuesto(){
        const total = this.CalcularTotal();
        return total * 0.16;

    }
    mostrarOrden(){
        let productosOrden = '';
        for(const producto of this._productos){
            productosOrden += producto.toString() + '\n';
        }
        const totalmasImpuestos = this.CalcularTotal() + this.calcularImpuesto();
        console.log(`orden: ${this._idOrden}, Total: $${this.CalcularTotal().toFixed(2)}, Productos: ${productosOrden}, Impuestos: Impuestos: $${this.calcularImpuesto().toFixed(2)}, Total mas Impuestos: $${totalmasImpuestos.toFixed(2)}`);
    }
    ProductosDescendentes(){
        return this._productos.slice().sort((a,b) = > b.precio - a.precio);
    }
}

let producto1 = new Producto('laptop', 600, 'Electronica', 10);
let producto2 = new Producto("Mouse", 300, "Electronica", 5);
let producto3 = new Producto("Silla", 150, "Muebles", 20);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let productoc = new Producto('teclado', 150);

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(productoa);
orden2.agregarProducto(productoc);
orden2.agregarProducto(productoc);
orden2.agregarProducto(productob);

orden2.mostrarOrden();

console.log("\nListar productos en orden descendente por precio:");
const productosDesc = orden1.listarProductosDescendente();
productosDesc.forEach((producto) => console.log(producto.toString()));

//Ejercicio Reto

/*
 1. Stock Disminuya
 2. Descuento por Categoria (crear una nueva propiedad de categoriaen la clase producto)
                            (los productos de la categoria Electronica deben tener descuento del 10% al calcullar el total de la venta)
 3. Aplicacion de impuestos (Implementar un metodo calcularImpuesto() en la clase orden para que agrege un impuesto 16%)
 4. Listar los productos de forma descendente 
 5. Restriccion adicional (Aseguramos que los precios no pueden ser negativos al establecerlos en la clase Producto)
 */

