// alert ("Coderhourse 2022 - Desafio N° 1+2+3 - Alan Drozd");
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

const Articulos = []

class Producto {
    constructor(id, nombre, importe, categoria){
        this.id = id;
        this.nombre = nombre;
        this.importe = importe;  
        this.categoria = categoria;
    }
    mostrarProducto(){
        return this.nombre;
    }
}

Articulos.push (new Producto(1, 'Polerin Yaro Negro', 3790, 'Ropa'));
Articulos.push (new Producto(2, 'Poleron Dean Crudo', 8990, 'Ropa'));
Articulos.push (new Producto(3, 'Jean Jacob', 8990, 'Ropa'));
Articulos.push (new Producto(4, 'Poleron Dean Negro', 8990, 'Ropa'));
Articulos.push (new Producto(5, 'Kit Male Grooming', 5890, 'MakeUp'))
Articulos.push (new Producto(6, 'Mascara en gel', 1520, 'MakeUp'))
Articulos.push (new Producto(7, 'Primer Filler', 1290, 'MakeUp'))
Articulos.push (new Producto(8, 'Corrector Liquido', 1290, 'MakeUp'))


// let nombre = prompt("Hola salvaje! Antes de continuar, podrias decirnos tu nombre?");
// let saludo = alert (nombre + ", bienvenido a nuestra tienda!");

let filterA = Articulos.filter((elemento) => {
    return elemento.categoria === 'Ropa'
})
let filterB = Articulos.filter((elemento) => {
    return elemento.categoria === 'MakeUp'
})

let sector = prompt("Por favor, selecciona una categoria:" + "\n" + "1- " + Articulos[0, 3].categoria + "\n" + "2- " + Articulos[4, 7].categoria) 

let pedido = if (sector == 1) {
    parseInt(prompt("Cual de nuestros productos te interesa?" + "\n" + "1- " + Articulos[0].nombre + " $" + Articulos[0].importe + "\n" + "2- " + Articulos[1].nombre + " $" + Articulos[1].importe + "\n" + "3- " + Articulos[2].nombre + " $" + Articulos[2].importe + "\n" + "4- " + Articulos[3].nombre + " $" + Articulos[3].importe + "\n"))
}   else if (sector == 2) {
    parseInt(prompt("Cual de nuestros productos te interesa?" + "\n" + "1- " + Articulos[4].nombre + " $" + Articulos[4].importe + "\n" + "2- " + Articulos[5].nombre + " $" + Articulos[5].importe + "\n" + "3- " + Articulos[6].nombre + " $" + Articulos[6].importe + "\n" + "4- " + Articulos[7].nombre + " $" + Articulos[7].importe + "\n"))
}   else {
    alert("No contamos con ese producto");
}

let cantidad = prompt("Cuantos queres comprar?");

for (let lista of Articulos) {
    if (lista.id == pedido) {
        alert("Seleccionaste " + lista.nombre + (cantidad * lista.importe))
    }
}

// if (pedido == 1) {
//     alert("Seleccionaste: " + Articulos[0].nombre + ", el total de tu pedido es de $" + Articulos[0].importe * cantidad);
//     } else if (pedido == 2) {
//         alert("Seleccionaste: " + Articulos[1].nombre + ", el total de tu pedido es de $" + Articulos[1].importe * cantidad);
//     } else if (pedido == 3) {
//         alert("Seleccionaste: " + Articulos[2].nombre + ", el total de tu pedido es de $" + Articulos[2].importe * cantidad);
//     } else if (pedido == 4) {    
//         alert("Seleccionaste: " + Articulos[3].nombre + ", el total de tu pedido es de $" + Articulos[3].importe * cantidad);
//     } else {
//         alert("No contamos con ese producto");
//     };
//     alert("Gracias por elegirnos. Seguinos en redes sociales para encontrar descuentos!");