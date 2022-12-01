//Funciones
function tarjetas(array, cajaContenedora, filtro, claseButton) {
    let filtroDeZapatos = array.filter((el) => el.id.includes(filtro));
    for (const zapato of filtroDeZapatos) {
      let tarjetasZapatos = document.createElement("div");
      tarjetasZapatos.className = "col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 tarjetas";
      tarjetasZapatos.innerHTML = `
            <div class="card border-dark">
                    <img
                      src="${zapato.imgURL}"
                      class="card-img-top"
                      alt="Jordan Clasica"
                    />
                    <div class="card-body">
                      <h3 class="card-title">${zapato.nombre}</h3>
                      <p class="card-text">${zapato.precio} USD</p>
                      <button class="btn ${claseButton} buttonTarjetas" id="${zapato.id}">Comprar</button>
                    </div>
                  </div>`;
      cajaContenedora.append(tarjetasZapatos)
    }
  }
  
  function actualizarCarrito() {
    let montoTotal = 0;
    for (const item of carritoGuardado) {
      montoTotal += item.subtotal;
      contenedorCarrito.innerHTML += `
        <div class="itemCarrito">
        <img src="${item.img}" alt="">
        <p>${item.nombre}</p>
        <p>${item.precioUnidad}</p>
        <p>${item.unidades}</p>
        <p>${item.subtotal}</p>`;
    }
    totalDelCarrito.innerHTML = `
    <h4 class="itemTotal">Total:</h4>
    <p class="itemTotal">${montoTotal} $</p>`;
  }

  function agregarProductoAlCarrio(arrayARecorrer) {
    for (const botton of bottones) {
      botton.onclick = (e) => {
        let zapatosAgregados = arrayARecorrer.find(
          (zapato) => zapato.id === e.target.id
        );
        let posicionDelZapatoEnElCarrito = carritoGuardado.findIndex(
          (zapato) => zapato.id == zapatosAgregados.id
        );
        if (posicionDelZapatoEnElCarrito != -1) {
          carritoGuardado[posicionDelZapatoEnElCarrito].unidades++;
          carritoGuardado[posicionDelZapatoEnElCarrito].subtotal =
            carritoGuardado[posicionDelZapatoEnElCarrito].precioUnidad *
            carritoGuardado[posicionDelZapatoEnElCarrito].unidades;
        } else {
          carritoGuardado.push({
            id: zapatosAgregados.id,
            img: zapatosAgregados.imgURL,
            nombre: zapatosAgregados.nombre,
            precioUnidad: zapatosAgregados.precio,
            unidades: 1,
            subtotal: zapatosAgregados.precio,
          });
        }
    
        Toastify({
          text: "Producto agregado",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
        contenedorCarrito.innerHTML = ``;
        localStorage.setItem("contenedorCarro", JSON.stringify(carritoGuardado));
        actualizarCarrito();
      };
    }
  }
  
  function buttonDeCompra() {
    buttonComprarElCarrito.onclick = () => {
      if (contenedorCarrito.innerHTML == ``) {
        Swal.fire("Carro Vacio", "No hay productos en el carrito", "error");
      } else {
        Swal.fire({
          title: "¿Seguro?",
          text: "¿Estas seguro que quieres realizar esta compra",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Confirmar",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Comprado", "Compra realizada con exito", "success");
            contenedorCarrito.innerHTML = ``;
            totalDelCarrito.innerHTML = `
      <h4 class="itemTotal">Total:</h4>
    <p class="itemTotal">0</p>`;
          }
        });
      }
    };
  }
  
  function buttonDeLimpiar(limpiar) {
    limpiar.onclick = () => {
      localStorage.removeItem("contenedorCarro");
      contenedorCarrito.length = 0;
      contenedorCarrito.innerHTML = ``;
      totalDelCarrito.innerHTML = `
      <h4 class="itemTotal">Total:</h4>
    <p class="itemTotal">0</p>`;
    };
  }