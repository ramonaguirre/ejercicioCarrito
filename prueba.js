const PRODUCTO1 = new Producto(`Nike`, `18.500`, `Zapatillas`);

agregarAlCarro(PRODUCTO1);


function Producto (marca, precio, categoria){
    this.marca = marca;
    this.precio = precio;
    this.categoria = categoria;
}

function agregarAlCarro(productos){
    const mostarCarro = `Agregaste al carro de compra: ${productos.categoria}: ${productos.marca}, valor del producto ${productos.precio}`;
    console.log(mostarCarro);
}