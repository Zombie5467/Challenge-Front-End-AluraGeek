import { productoServices } from '../servicios/productos-servicios.js';

const productoFormulario = document.querySelector('[data-producto-form]');

productoFormulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const imgProducto = document.querySelector('[data-img]').value;
  const recomendadoProducto =
    document.querySelector('[data-recomendado]').value;
  const nombreProducto = document.querySelector('[data-nombre]').value;
  const precioProducto = document.querySelector('[data-precio]').value;
  // console.log(imgProducto, recomendadoProducto, nombreProducto, precioProducto);
  productoServices
    .crearProducto(
      imgProducto,
      recomendadoProducto,
      nombreProducto,
      precioProducto
    )
    .then(respuesta => {
      // window.location.href = '/src/productos.html'
      // function refrescar() {
      //   location.reload();
      // }
      // refrescar();
      productoServices.refrescarPagina();
    });
});
