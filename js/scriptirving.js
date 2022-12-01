const APILOCAL = "../json/productos.json"
fetch (APILOCAL)
.then (producto => producto.json())
.then (info => {
    tarjetas(info, cajaTarjetaDeIrving3, "(Kyrie3-seccion1)", "buttonTarjetasIrving")
    tarjetas(info, cajaTarjetaDeIrving3Section2, "(Kyrie3-seccion2)", "buttonTarjetasIrving")
    tarjetas(info, cajaTarjetaDeIrving4, "(Kyrie4-seccion1)", "buttonTarjetasIrving")
    tarjetas(info, cajaTarjetaDeIrving4Section2, "(Kyrie4-seccion2)", "buttonTarjetasIrving")
    tarjetas(info, cajaTarjetaDeIrving5, "(Kyrie5-seccion1)", "buttonTarjetasIrving")
    tarjetas(info, cajaTarjetaDeIrving5Section2, "(Kyrie5-seccion2)", "buttonTarjetasIrving")
    agregarProductoAlCarrio(info)
})

let cajaTarjetaDeIrving3 = document.getElementById("irving3")
let cajaTarjetaDeIrving3Section2 = document.getElementById("irving3-section2")
let cajaTarjetaDeIrving4 = document.getElementById("irving4")
let cajaTarjetaDeIrving4Section2 = document.getElementById("irving4-section2")
let cajaTarjetaDeIrving5 = document.getElementById("irving5")
let cajaTarjetaDeIrving5Section2 = document.getElementById("irving5-section2")

let carritoGuardado = JSON.parse(localStorage.getItem("contenedorCarro")) || [];

let bottones = document.getElementsByClassName("buttonTarjetas");
let contenedorCarrito = document.getElementById("contenedorCarro");
let totalDelCarrito = document.getElementById("total");



let buttonLimpiarElCarrito = document.getElementById("buttonClear");
let buttonComprarElCarrito = document.getElementById("buttonComprar");

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

buttonDeLimpiar(buttonLimpiarElCarrito);
buttonDeCompra();
actualizarCarrito();