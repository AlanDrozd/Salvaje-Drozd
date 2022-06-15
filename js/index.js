alert ("Coderhourse 2022 - Desafio N° 1+2+3 - Alan Drozd");
alert ("Para visualizar este sitio por favor ingresa: \nUsuario:coder \nClave:house");

let usuario = prompt("Ingrese Usuario: ");
while (usuario != "coder"){
    alert("Ingresaste el usuario: " + usuario + ", ese usuario es incorrecto." + "\nPor favor intenta nuevamente!");
    usuario= prompt("Para avanzar ingresa el siguiente usuario:coder");
};

let password = prompt("Ingrese clave: ");
while (password != "house"){
    alert("Ingresaste la clave: " + password + ", esa clave es incorrecta." + "\nPor favor intenta nuevamente!");
    password= prompt("Para avanzar ingresa la siguiente clave:house");
};

alert ("Por ultimo quisieramos saber tu edad.");
let edad =prompt("Por favor ingresa tu edad:");
if (edad >17) {
    alert("Ingresaste: " + edad + " años. Bienvenido a nuestro sitio!");
}else {
    alert("Por favor en caso de concretar una compra, consultalo antes con un adulto.")
};

const Ropa = []

class Producto {
    constructor(nombre, importe){
        this.nombre = nombre;
        this.importe = importe;  
    }
    mostrarProducto(){
        return this.nombre;
    }
}

Ropa.push (new Producto('Polerin Yaro Negro', 3790));
Ropa.push (new Producto('Poleron Dean Crudo', 8990));
Ropa.push (new Producto('Jean Jacob', 8990));
Ropa.push (new Producto('Poleron Dean Negro', 8990));

console.log (Ropa[2].nombre)


let nombre = prompt("Hola salvaje! Antes de continuar, podrias decirnos tu nombre?");
let saludo = alert (nombre + ", bienvenido a nuestra tienda!");
let pedido = prompt("Cual de nuestros productos te interesa?" + "\n" + "1- " + Ropa[0].nombre + " $" + Ropa[0].importe + "\n" + "2- " + Ropa[1].nombre + " $" + Ropa[1].importe + "\n" + "3- " + Ropa[2].nombre + " $" + Ropa[2].importe + "\n" + "4- " + Ropa[3].nombre + " $" + Ropa[3].importe + "\n");
let cantidad = prompt("Cuantos queres comprar?");

if (pedido == 1) {
    alert("Seleccionaste: " + Ropa[0].nombre + ", el total de tu pedido es de $" + Ropa[0].importe * cantidad);
    } else if (pedido == 2) {
        alert("Seleccionaste: " + Ropa[1].nombre + ", el total de tu pedido es de $" + Ropa[1].importe * cantidad);
    } else if (pedido == 3) {
        alert("Seleccionaste: " + Ropa[2].nombre + ", el total de tu pedido es de $" + Ropa[2].importe * cantidad);
    } else if (pedido == 4) {    
        alert("Seleccionaste: " + Ropa[3].nombre + ", el total de tu pedido es de $" + Ropa[3].importe * cantidad);
    } else {
        alert("No contamos con ese producto");
    };
    alert("Gracias por elegirnos. Seguinos en redes sociales para encontrar descuentos!");