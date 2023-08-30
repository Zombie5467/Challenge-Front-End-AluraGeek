import { productoServices } from '../servicios/productos-servicios.js';

const crearNuevaLinea = (imgUrl, recomendado, nombre, precio, id) => {
  console.log(id);
  const linea = document.createElement('div');
  // linea.classList.add('item-a');
  const contenido = `
          <div  href="#">
            <div class="card">

              <img src=${imgUrl} alt="">

              <div class="card__info">
                <p class="p--salmon">${recomendado}</p>
                <h4 class="a__card">${nombre}</h4>
              </div>

              <p class="p--gray">${precio}</p>
              

              <button type="button" id='${id}'>delete</button>
              
              <a href="crudEdit.html?id=${id}"><button>edit</button></a>
              
            </div>
          </div>
  `;
  linea.innerHTML = contenido;
  const btnDelete = linea.querySelector('button');
  btnDelete.addEventListener('click', () => {
    const id = btnDelete.id;
    productoServices.eliminarProducto(id).then(respuesta => {
      console.log(respuesta)
    }).catch((err) => alert('Ocurrió un error'));
  });
  return linea;
};



const dbProducto = document.querySelector('[data-producto]');

productoServices
  .listaProductos()
  .then((data) => {
    data.forEach(({ imgUrl, recomendado, nombre, precio, id }) => {
      const nuevaLinea = crearNuevaLinea(
        imgUrl,
        recomendado,
        nombre,
        precio,
        id
      );
      dbProducto.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert('Ocurrió un error'));

  

