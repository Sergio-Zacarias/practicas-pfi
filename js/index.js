const arrayProductos = [
  {
    nombre: "Pelota LLamarada Moe",
    precio: 65000,
    descripcion:
      "Con un tamaño de nº7 y una circunferencia de 74 cm, esta pelota está diseñada para ofrecer un excelente control y manejo en la cancha. Fabricada con material de caucho de alta calidad y una cámara de butilo, garantiza durabilidad y resistencia en cualquier tipo de superficie, ya sea interior o exterior.",
    nombreImagen: "./imagenes/pelota.jpg",
  },
  {
    nombre: "Zapatillas MG 20",
    precio: 170000,
    descripcion:
      "Eleva tu rendimiento y domina cada rincón de la cancha con las nuevas [Nombre de las zapatillas]. Diseñadas para jugadores que exigen lo máximo, estas zapatillas combinan tecnología de punta con un estilo imponente. Su sistema de amortiguación de doble capa absorbe el impacto en cada salto y aterrizaje, protegiendo tus articulaciones y permitiendo que te muevas con una explosividad sin igual.",
    nombreImagen: "./imagenes/zapatillas.jpg",
  },
  {
    nombre: "Aro Exterior",
    precio: 300000,
    descripcion:
      "¡Prepárate para encestar y sentir la gloria con este aro de baloncesto profesional! Construido con materiales resistentes y un diseño aerodinámico, este aro te dará la precisión y potencia que necesitas para tus entrenamientos, garantizando horas de diversión y mejora constante de tu juego. ¡Conviértete en el rey de la cancha y anota puntos para la victoria!",
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

  //creo boton
  let botonProducto = document.createElement("button");
  botonProducto.classList.add("btn-productos");
  botonProducto.textContent = "Ver Descripcion";
  botonProducto.addEventListener("click", () => {
    tarjeta.appendChild(descripcionProducto);
  });

  tarjeta.appendChild(tituloProducto);
  tarjeta.appendChild(imagen);
  // tarjeta.appendChild(descripcionProducto);
  tarjeta.appendChild(botonProducto);
  tarjeta.appendChild(precio);

  divTarjetas.appendChild(tarjeta);
});

sectionContainer.appendChild(divTarjetas);
