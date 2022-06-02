alert ("Coderhourse 2022 - Desafio N° 1 - Alan Drozd");
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
let valor1 =prompt("Por favor ingresa tu edad:");
if (valor1 >17) {
    alert("Ingresaste: " + valor1 + " años. Bienvenido a nuestro sitio!");
}else {
    alert("Por favor en caso de concretar una compra, consultalo antes con un adulto.")
};