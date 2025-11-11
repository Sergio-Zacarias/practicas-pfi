const arrayProductos = [
  { nombre: "Producto 1", precio: 2000, descripcion: "Descripcion producto 1" },
  { nombre: "Producto 2", precio: 4000, descripcion: "Descripcion producto 2" },
  { nombre: "Producto 3", precio: 7000, descripcion: "Descripcion producto 3" },
];

const sectionContainer = document.getElementById("productos-home");
let divTarjetas = document.createElement("div");
divTarjetas.classList.add("clase-tarjetas");

arrayProductos.forEach((productos) => {
  //creo el article
  let tarjeta = document.createElement("article");
  tarjeta.classList.add("clase-articulo");

  //titulo
  let titulo = document.createElement("h2");
  titulo.classList.add("clase-titulo");
  titulo.textContent = productos.nombre;

  //precio
  let precio = document.createElement("p");
  precio.classList.add("clase-precio");
  precio.textContent = `Precio: $${productos.precio}`;

  //descripcion
  let descripcion = document.createElement("p");
  descripcion.classList.add("clase-descripcion");
  descripcion.textContent = productos.descripcion;

  tarjeta.appendChild(titulo);
  tarjeta.appendChild(precio);
  tarjeta.appendChild(descripcion);

  divTarjetas.appendChild(tarjeta);
});

sectionContainer.appendChild(divTarjetas);
