const APILOCAL = "../json/productos.json"
fetch(APILOCAL)
.then (producto => producto.json())
.then (info => {
  tarjetas(info, cajaTarjetaDeJordans1, "Jordan-1", "buttonTarjetasMichael")
  tarjetas(info, cajaTarjetaDeJordans4, "Jordan-4", "buttonTarjetasMichael")
  tarjetas(info, cajaTarjetaDeJordans6, "Jordan-6", "buttonTarjetasMichael")
  agregarProductoAlCarrio(info)
})

let cajaTarjetaDeJordans1 = document.getElementById("jordans1");

let cajaTarjetaDeJordans4 = document.getElementById("jordans4");

let cajaTarjetaDeJordans6 = document.getElementById("jordans6");

let carritoGuardado = JSON.parse(localStorage.getItem("contenedorCarro")) || [];

let bottones = document.getElementsByClassName("buttonTarjetas");
let contenedorCarrito = document.getElementById("contenedorCarro");
let totalDelCarrito = document.getElementById("total");

let buttonLimpiarElCarrito = document.getElementById("buttonClear");
let buttonComprarElCarrito = document.getElementById("buttonComprar");

buttonDeLimpiar(buttonLimpiarElCarrito);
buttonDeCompra();
actualizarCarrito();


