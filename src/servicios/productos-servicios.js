// const crearNuevaLinea = (imgUrl, recomendado, nombre, precio) => {
//   const linea = document.createElement('div');
//   // linea.classList.add('item-a');
//   const contenido = `
//           <div  href="#">
//             <div class="card">

//               <img src=${imgUrl} alt="">

//               <div class="card__info">
//                 <p class="p--salmon">${recomendado}</p>
//                 <h4 class="a__card">${nombre}</h4>
//               </div>

//               <p class="p--gray">${precio}</p>
              

//               <button>edit</button>
//               <button>delete</button>
//             </div>
//           </div>
//   `;
//   linea.innerHTML = contenido;
//   return linea;
// };

// const dbProducto = document.querySelector('[data-producto]');

// Fetch API 
const listaProductos = () => {
  return fetch('https://alurageek-json-server-crud.onrender.com/producto').then( respuesta => {
    return respuesta.json()  
  });
};

const crearProducto = (imgUrl, recomendado, nombre, precio) => {
  return fetch('https://alurageek-json-server-crud.onrender.com/producto', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imgUrl, recomendado, nombre, precio, id: uuid.v4() }),
  });
};

const eliminarProducto = (id) => {
  return fetch(`https://alurageek-json-server-crud.onrender.com/producto/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      // Verificar si la solicitud se completó correctamente
      if (response.ok) {
        // La solicitud se completó con éxito, ahora puedes recargar la página
        refrescarPagina();
      } else {
        console.error('Error al eliminar el producto');
      }
    })
    .catch((error) => {
      console.error('Error en la solicitud DELETE:', error);
    });
};

function refrescarPagina() {
  location.reload();
}


const detalleProducto = (id) => {
  return fetch(`https://alurageek-json-server-crud.onrender.com/producto/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const editarProducto = (id) => {
  return fetch(`https://alurageek-json-server-crud.onrender.com/producto/${id}`).then((respuesta) => respuesta.json()
  );
};

const actualizarProducto = (imgUrl, recomendado, nombre, precio, id) => {
  return fetch(`https://alurageek-json-server-crud.onrender.com/producto/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imgUrl, recomendado, nombre, precio, id}),
  }).then((respuesta) => console.log(respuesta))
    .catch((error) => {
      console.error('Error en la solicitud PUT:', error);
    });
};

export const productoServices = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  editarProducto,
  actualizarProducto,
  refrescarPagina,

};
