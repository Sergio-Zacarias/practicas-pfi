const arrayProductos = [
  {
    nombre: "Pelota LLamarada Moe",
    precio: 65000,
    descripcion: "Con un tamaño de nº7 y una circunferencia de 74 cm",
    nombreImagen: "./imagenes/pelota.jpg",
  },
  {
    nombre: "Zapatillas MG 20",
    precio: 170000,
    descripcion: "Eleva tu rendimiento y domina cada rincón",
    nombreImagen: "./imagenes/zapatillas.jpg",
  },
  {
    nombre: "Aro Exterior",
    precio: 300000,
    descripcion: "¡Prepárate para encestar y sentir la gloria!",
    nombreImagen: "./imagenes/juegos.png",
  },
];

const sectionContainer = document.getElementById("productos-home");
let divTarjetas = document.createElement("div");
divTarjetas.classList.add("contenedor-tarjetas");

arrayProductos.forEach((productos) => {
  //creo el article
  let tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta-producto");

  //creo la imagen
  let imagen = document.createElement("img");
  imagen.src = productos.nombreImagen;

  //titulo
  let tituloProducto = document.createElement("h3");
  // titulo.classList.add("clase-titulo");
  tituloProducto.textContent = productos.nombre;

  //descripcion
  let descripcionProducto = document.createElement("p");
  //descripcion.classList.add("clase-descripcion");
  descripcionProducto.textContent = productos.descripcion;

  //precio
  let precio = document.createElement("p");
  //precio.classList.add("clase-precio");
  precio.textContent = `Precio: $${productos.precio}`;

  tarjeta.appendChild(tituloProducto);
  tarjeta.appendChild(imagen);
  tarjeta.appendChild(descripcionProducto);
  tarjeta.appendChild(precio);

  divTarjetas.appendChild(tarjeta);
});

sectionContainer.appendChild(divTarjetas);
