import { productoServices } from '../servicios/productos-servicios.js';

const productoFormulario = document.querySelector('[data-producto-form]');

productoFormulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const imgProducto = document.querySelector('[data-img]').value;
  const recomendadoProducto =
    document.querySelector('[data-recomendado]').value;
  const nombreProducto = document.querySelector('[data-nombre]').value;
  const precioProducto = document.querySelector('[data-precio]').value;
  
  productoServices
    .crearProducto(
      imgProducto,
      recomendadoProducto,
      nombreProducto,
      precioProducto
    )
    .then(respuesta => {
      productoServices.refrescarPagina();
      /** 
      Backup Refrescar pagina viejo
      window.location.href = '/src/productos.html'
        function refrescar() {
          location.reload();
        }
      refrescar();
    */
    });
});
