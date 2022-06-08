alert ("Coderhourse 2022 - Desafio N° 1+2 - Alan Drozd");
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

function productos(nombre, importe) {
    this.nombre = nombre;
    this.importe = importe;
}
const polerinYaro = new productos('Polerin Yaro Negro', 3790);
const poleronDeanCrudo = new productos('Poleron Dean Crudo', 8990);
const jeanJacob = new productos('Jean Jacob', 8990);
const poleronDeanNegro = new productos('Poleron Dean Negro', 8990);

let nombre = prompt("Hola salvaje! Antes de continuar, podrias decirnos tu nombre?");
let saludo =  alert (nombre + ", bienvenido a nuestra tienda!");
let pedido = prompt("Cual de nuestros productos te interesa?" + "\n" + "1- " + polerinYaro.nombre + " $" + polerinYaro.importe + "\n" + "2- " + poleronDeanCrudo.nombre + " $" + poleronDeanCrudo.importe + "\n" + "3- " + jeanJacob.nombre + " $" + jeanJacob.importe + "\n" + "4- " + poleronDeanNegro.nombre + " $" + poleronDeanNegro.importe + "\n");
let cantidad = prompt("Cuantos queres comprar?");

if (pedido == 1) {
    alert("Seleccionaste: " + polerinYaro.nombre + ", el total de tu pedido es de $" + polerinYaro.importe * cantidad);
    } else if (pedido == 2) {
        alert("Seleccionaste: " + poleronDeanCrudo.nombre + ", el total de tu pedido es de $" + poleronDeanCrudo.importe * cantidad);
    } else if (pedido == 3) {
        alert("Seleccionaste: " + jeanJacob.nombre + ", el total de tu pedido es de $" + jeanJacob.importe * cantidad);
    } else if (pedido == 4) {    
        alert("Seleccionaste: " + poleronDeanNegro.nombre + ", el total de tu pedido es de $" + poleronDeanNegro.importe * cantidad);
    } else {
        alert("No contamos con ese producto");
    }       
    alert("Gracias por elegirnos. Seguinos en redes sociales para encontrar descuentos!")