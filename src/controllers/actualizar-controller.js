import { productoServices } from "../servicios/productos-servicios.js";

const formulario = document.querySelector('[data-producto]');

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if (id === null) {
        window.location.href = '/src/error.html';
    }

    const imgUrl = document.querySelector('[data-img]');
    const recomendado = document.querySelector('[data-recomendado]');
    const nombre = document.querySelector('[data-nombre]');
    const precio = document.querySelector('[data-precio]');

    

    productoServices.detalleProducto(id).then((producto) => {
        imgUrl.value = producto.imgUrl;
        recomendado.value = producto.recomendado;
        nombre.value = producto.nombre;
        precio.value = producto.precio;
    });

};

obtenerInformacion();

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const imgUrl = document.querySelector('[data-img]').value
    const recomendado = document.querySelector('[data-recomendado]').value
    const nombre = document.querySelector('[data-nombre]').value
    const precio = document.querySelector('[data-precio]').value
    
    productoServices.actualizarProducto(imgUrl, recomendado, nombre, precio, id).then(() => {
    //   productoServices.refrescarPagina(); 
     
      window.location.href =
        'https://alurageek-re4c.onrender.com/productos.html';
    });
});