const APILOCAL = "../json/productos.json"
fetch(APILOCAL)
.then (producto => producto.json())
.then (info => {
  tarjetas(info, cajaTarjetaDeKobe1, "kobe-1", "buttonTarjetasKobe")
  tarjetas(info, cajaTarjetaDeKobe4, "kobe-4", "buttonTarjetasKobe")
  tarjetas(info, cajaTarjetaDeKobe9, "kobe-9", "buttonTarjetasKobe")
  tarjetas(info, cajaTarjetaDeKobe11, "kobe-ll", "buttonTarjetasKobe")
  agregarProductoAlCarrio(info)
})

let cajaTarjetaDeKobe1 = document.getElementById("kobe1")
let cajaTarjetaDeKobe4 = document.getElementById("kobe4")
let cajaTarjetaDeKobe9 = document.getElementById("kobe9")
let cajaTarjetaDeKobe11 = document.getElementById("kobe11")

let carritoGuardado = JSON.parse(localStorage.getItem("contenedorCarro")) || [];

let bottones = document.getElementsByClassName("buttonTarjetas");
let contenedorCarrito = document.getElementById("contenedorCarro");
let totalDelCarrito = document.getElementById("total");


let buttonLimpiarElCarrito = document.getElementById("buttonClear");
let buttonComprarElCarrito = document.getElementById("buttonComprar");

buttonDeLimpiar(buttonLimpiarElCarrito);
buttonDeCompra();
actualizarCarrito();

