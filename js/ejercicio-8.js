// Escribe un programa que pida un número y diga si es divisible por 2

let num = parseInt(prompt("Introduce un número:"));

if (num % 2 === 0){
  document.write("El número " + num + " es par");
} else {
  document.write("El número " + num + " es impar");
}