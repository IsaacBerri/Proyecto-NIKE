let zapatosJordans = [
  {
    id: "Jordan-1-Red",
    nombre: "Jordan 1 Retro Chicago",
    precio: 160,
    imgURL: "../img/jordan1.jpg",
  },
  {
    id: "Jordan-1-Blue",
    nombre: "Jordan 1 University Blue",
    precio: 395,
    imgURL: "../img/jordan2.png",
  },
  {
    id: "Jordan-1-Black",
    nombre: "Jordan 1 Black White",
    precio: 600,
    imgURL: "../img/jordan3.png",
  },
  {
    id: "Jordan-1-Dior",
    nombre: "Jordan 1 Retro High Dior",
    precio: 7700,
    imgURL: "../img/jordan4.png",
  },
  {
    id: "Jordan-4-Black",
    nombre: "Jordan 4 black canvas",
    precio: 302,
    imgURL: "../img/jordans 4 black.jpg",
  },
  {
    id: "Jordan-4-Blue",
    nombre: "Jordan 4 University Blue",
    precio: 436,
    imgURL: "../img/jordans 4 blue.jpg",
  },
  {
    id: "Jordan-4-White",
    nombre: "Jordan 4 White Oreo",
    precio: 445,
    imgURL: "../img/jordans 4 shimmer.jpg",
  },
  {
    id: "Jordan-4-Shimmer",
    nombre: "Jordan 4 Shimmer",
    precio: 380,
    imgURL: "../img/jordans 4 white.jpg",
  },
  {
    id: "Jordan-6-Green",
    nombre: "Jordan 6 Electric Green",
    precio: 200,
    imgURL: "../img/Jordan 6 Electric Green.jpg",
  },
  {
    id: "Jordan-6-Grey",
    nombre: "Jordan 6 Georgetown",
    precio: 171,
    imgURL: "../img/Jordan 6 Georgetown.jpg",
  },
  {
    id: "Jordan-6-Black",
    nombre: "Jordan 6 Infrared Black",
    precio: 239,
    imgURL: "../img/Jordan 6 Infrared Black.jpg",
  },
  {
    id: "Jordan-6-Travis-Scott",
    nombre: "Jordan 6 Travis Scott",
    precio: 390,
    imgURL: "../img/Jordan 6 Travis Scott.jpg",
  },
];

let cajaTarjetaDeJordans1 = document.getElementById("jordans1");
let filtroJordans1 = "Jordan 1";
tarjetas(zapatosJordans, cajaTarjetaDeJordans1, filtroJordans1);

let cajaTarjetaDeJordans4 = document.getElementById("jordans4");
let filtroJordans4 = "Jordan 4";
tarjetas(zapatosJordans, cajaTarjetaDeJordans4, filtroJordans4);

let cajaTarjetaDeJordans6 = document.getElementById("jordans6");
let filtroJordans6 = "Jordan 6";
tarjetas(zapatosJordans, cajaTarjetaDeJordans6, filtroJordans6);

let carritoGuardado = JSON.parse(localStorage.getItem("contenedorCarro")) || [];

let bottones = document.getElementsByClassName("buttonTarjetas");
let contenedorCarrito = document.getElementById("contenedorCarro");

for (const botton of bottones) {
  botton.onclick = (e) => {
    let zapatosAgregados = zapatosJordans.find(
      (zapato) => zapato.id === e.target.id
    ); 
    let posicionDelZapatoEnElCarrito = carritoGuardado.findIndex(zapato => zapato.id == zapatosAgregados.id)
    if (posicionDelZapatoEnElCarrito != -1) {
      carritoGuardado[posicionDelZapatoEnElCarrito].unidades++
      carritoGuardado[posicionDelZapatoEnElCarrito].subtotal = carritoGuardado[posicionDelZapatoEnElCarrito].precioUnidad * carritoGuardado[posicionDelZapatoEnElCarrito].unidades
    } else {
      carritoGuardado.push({
        id: zapatosAgregados.id,
        img: zapatosAgregados.imgURL,
        nombre: zapatosAgregados.nombre,
        precioUnidad: zapatosAgregados.precio,
        unidades: 1,
        subtotal: zapatosAgregados.precio
  
      });
    }

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    })
    contenedorCarrito.innerHTML = ``
    localStorage.setItem("contenedorCarro", JSON.stringify(carritoGuardado));
    actualizarCarrito()
  };
}



let buttonLimpiarElCarrito = document.getElementById("buttonClear");
let buttonComprarElCarrito = document.getElementById("buttonComprar");

buttonDeLimpiar(buttonLimpiarElCarrito);
buttonDeCompra();
actualizarCarrito();




//Funciones
function tarjetas(array, cajaContenedora, filtro) {
  let filtroDeZapatos = array.filter((el) => el.nombre.includes(filtro));
  console.log(filtroDeZapatos);
  for (const zapato of filtroDeZapatos) {
    let tarjetasZapatos = document.createElement("div");
    tarjetasZapatos.className = "col-sm-12 col-md-6 col-lg-3 col-xl-3 tarjetas";
    tarjetasZapatos.innerHTML = `
          <div class="card border-danger" style="width: 18rem">
                  <img
                    src="${zapato.imgURL}"
                    class="card-img-top"
                    alt="Jordan Clasica"
                  />
                  <div class="card-body">
                    <h3 class="card-title">${zapato.nombre}</h3>
                    <p class="card-text">${zapato.precio} USD</p>
                    <button class="btn btn-danger buttonTarjetas" id="${zapato.id}">Comprar</button>
                  </div>
                </div>`;
    cajaContenedora.append(tarjetasZapatos);
  }
}

function actualizarCarrito() {
  for (const item of carritoGuardado) {
    contenedorCarrito.innerHTML += `
      <div class="itemCarrito">
      <img src="${item.img}" alt="">
      <p>${item.nombre}</p>
      <p>${item.precioUnidad}</p>
      <p>${item.unidades}</p>
      <p>${item.subtotal}</p>`
  }
}

function buttonDeCompra() {
  buttonComprarElCarrito.onclick = () => {
    if (contenedorCarrito.innerHTML == ``) {
      Swal.fire(
        'Carro Vacio',
        'No hay productos en el carrito',
        'error'
      )
    } else {
      Swal.fire({
        title: '¿Seguro?',
        text: "¿Estas seguro que quieres realizar esta compra",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Comprado',
            'Compra realizada con exito',
            'success'
            
          )
          contenedorCarrito.innerHTML = ``;
        }
      })
      
    }
  };
}

function buttonDeLimpiar(limpiar) {
  limpiar.onclick = () => {
    localStorage.removeItem("contenedorCarro");
    contenedorCarrito.length = 0;
    contenedorCarrito.innerHTML = ``;
  };
}
