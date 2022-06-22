// alert ("Coderhourse 2022 - Primer pre entrega - Alan Drozd");
// alert ("Para visualizar este sitio por favor ingresa: \nUsuario:coder \nClave:house");

// let usuario = prompt("Ingrese Usuario: ");
// while (usuario != "coder"){
//     alert("Ingresaste el usuario: " + usuario + ", ese usuario es incorrecto." + "\nPor favor intenta nuevamente!");
//     usuario= prompt("Para avanzar ingresa el siguiente usuario:coder");
// };

// let password = prompt("Ingrese clave: ");
// while (password != "house"){
//     alert("Ingresaste la clave: " + password + ", esa clave es incorrecta." + "\nPor favor intenta nuevamente!");
//     password= prompt("Para avanzar ingresa la siguiente clave:house");
// };

// alert ("Por ultimo quisieramos saber tu edad.");
// let edad =prompt("Por favor ingresa tu edad:");
// if (edad >17) {
//     alert("Ingresaste: " + edad + " años. Bienvenido a nuestro sitio!");
// }else {
//     alert("Por favor en caso de concretar una compra, consultalo antes con un adulto.")
// };

// const articulos = []

// class Producto {
//     constructor(id, nombre, importe, categoria){
//         this.id = id;
//         this.nombre = nombre;
//         this.importe = importe;
//         this.categoria = categoria;
//     }
//     mostrarProducto(){
//         return this.nombre;
//     }
// }

// articulos.push (new Producto(1, 'Polerin Yaro Negro', 3790, 'Ropa'));
// articulos.push (new Producto(2, 'Poleron Dean Crudo', 8990, 'Ropa'));
// articulos.push (new Producto(3, 'Jean Jacob', 8990, 'Ropa'));
// articulos.push (new Producto(4, 'Poleron Dean Negro', 8990, 'Ropa'));
// articulos.push (new Producto(5, 'Kit Male Grooming', 5890, 'MakeUp'));
// articulos.push (new Producto(6, 'Mascara en gel', 1520, 'MakeUp'));
// articulos.push (new Producto(7, 'Primer Filler', 1290, 'MakeUp'));
// articulos.push (new Producto(8, 'Corrector Liquido', 1290, 'MakeUp'));

// let nombre = prompt("Hola salvaje! Antes de continuar, podrias decirnos tu nombre?");
// let saludo = alert (nombre + ", bienvenido a nuestra tienda!");

// // let filterA = articulos.filter((elemento) => {
// //     return elemento.categoria === 'Ropa'
// // })
// // let filterB = articulos.filter((elemento) => {
// //     return elemento.categoria === 'MakeUp'
// // })

// let sector = prompt("Por favor, selecciona una categoria:" + "\n" + "1- " + articulos[0].categoria + "\n" + "2- " + articulos[4].categoria)

// let ropa =0;

// if (sector == 1){
//     ropa = parseInt(prompt("Cual de nuestros productos te interesa?" + "\n" + "1- " + articulos[0].nombre + " $" + articulos[0].importe + "\n" + "2- " + articulos[1].nombre + " $" + articulos[1].importe + "\n" + "3- " + articulos[2].nombre + " $" + articulos[2].importe + "\n" + "4- " + articulos[3].nombre + " $" + articulos[3].importe + "\n"))-1
//     }   else{
//     ropa = parseInt(prompt("Cual de nuestros productos te interesa?" + "\n" + "1- " + articulos[4].nombre + " $" + articulos[4].importe + "\n" + "2- " + articulos[5].nombre + " $" + articulos[5].importe + "\n" + "3- " + articulos[6].nombre + " $" + articulos[6].importe + "\n" + "4- " + articulos[7].nombre + " $" + articulos[7].importe + "\n"))+3
//     }

// let cantidad = prompt("Selecciona " + articulos[ropa].nombre + ". Cuantos queres comprar?");

// alert("Seleccionaste " + cantidad +" del producto: " + articulos[ropa].nombre + " por un total de: " +(cantidad * articulos[ropa].importe ))

// alert("Gracias por elegirnos. Seguinos en redes sociales para encontrar descuentos!");

const articulos = [];

class Producto {
  constructor(id, nombre, importe, categoria, img) {
    this.id = id;
    this.nombre = nombre;
    this.importe = importe;
    this.categoria = categoria;
    this.img = img;
  }
}

articulos.push(
  new Producto(
    1,
    "Polerin Yaro Negro",
    3790,
    "Ropa",
    "./assets/images/card/card1.jpg"
  )
);
articulos.push(
  new Producto(
    2,
    "Poleron Dean Crudo",
    8990,
    "Ropa",
    "./assets/images/card/card2.jpg"
  )
);
articulos.push(
  new Producto(3, "Jean Jacob", 8990, "Ropa", "./assets/images/card/card3.jpg")
);
articulos.push(
  new Producto(
    4,
    "Poleron Dean Negro",
    8990,
    "Ropa",
    "./assets/images/card/card4.jpg"
  )
);
articulos.push(
  new Producto(
    5,
    "Kit Male Grooming",
    5890,
    "MakeUp",
    "./assets/images/card/makeup1.jpg"
  )
);
articulos.push(
  new Producto(
    6,
    "Mascara en gel",
    1520,
    "MakeUp",
    "./assets/images/card/makeup2.jpg"
  )
);
articulos.push(
  new Producto(
    7,
    "Primer Filler",
    1290,
    "MakeUp",
    "./assets/images/card/makeup3.jpg"
  )
);
articulos.push(
  new Producto(
    8,
    "Corrector Liquido",
    1290,
    "MakeUp",
    "./assets/images/card/makeup4.jpg"
  )
);

// let title = document.getElementById("title");
// let showProducts = document.getElementById("showProducts")
let showAllProducts = document.getElementById("showAllProducts");
const div = document.querySelector(".div");

let cart = [];
console.log(cart)

function mostrarProductos() {
  articulos.forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("card-body")
    showAllProducts.append(card);
    let img = document.createElement("img");
    img.setAttribute("src", product.img);
    img.classList.add("card-img-top")
    img.classList.add("img-fluid")
    img.classList.add("img-thumbnail")
    let nombre = document.createElement("h3");
    nombre.setAttribute("class", "card-text text-center")
    nombre.innerText = product.nombre;
    let importe = document.createElement("p");
    importe.setAttribute("class", "card-text text-center")
    importe.innerText = product.importe;
    let buyButton = document.createElement("button");
    buyButton.innerText = "Agregar al carrito";
    card.append(img, nombre, importe, buyButton);

    buyButton.addEventListener("click", function () {
      cart.push(product);
      alert("Agregaste " + product.nombre + "al carrito");
      // divCart.innerHTML = ``
      div.innerHTML = ``;
      showCart();
    });
  });
}
console.log(cart)

mostrarProductos();

// Carrito
let carrito = document.getElementById("cartList");
const buttonCart = document.getElementById("mostrarCarrito");

let alertCart = document.createElement("h2");

if (!cart.lenght) {
  alertCart.innerText = "El carrito esta vacio";
  div.append(alertCart);
}

function showCart() {
  alertCart.remove();

  cart.forEach((element) => {
    const divCart = document.createElement('li');
    divCart.innerHTML += `
        <img src= "${element.img}" class="card-img-top img-fluid img-thumbnail">
        <h3>${element.nombre}</h3>
        <h3>$${element.importe}</h3>`

    div.appendChild(divCart);
  });
  
  // Precio total
  const total = cart
    .map((item) => parseInt(item.importe))
    .reduce(
      (cartTotalPrice, currentItemPrice) => cartTotalPrice + currentItemPrice,
      0
    );
  let totalCompra = document.createElement("h4");
  totalCompra.innerText = ("Total: " + total);
  div.append(totalCompra);

  // Vaciar
  let deleteCart = document.createElement("button");
  deleteCart.innerText = "Vaciar carrito";
  div.append(deleteCart);

  deleteCart.onclick = () => {
    cart = []
    div.innerHTML = ``
    console.log(cart)
  }
}

buttonCart.onclick = () => {
    div.innerHTML = ``
    showCart()
}