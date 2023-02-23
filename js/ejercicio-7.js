// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = prompt("Introduce el primer número:");
let num2 = prompt("Introduce el segundo número:");
let num3 = prompt("Introduce el tercer número:");

let mayor = num1;

if (num2 > mayor) {
  mayor = num2;
}
if (num3 > mayor) {
  mayor = num3;
}

document.write("El número mayor es: " + mayor);