// Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt("Introduce una frase:");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
  let letra = frase.charAt(i).toLowerCase();
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    vocales += letra;
  }
}

document.write("Las vocales en la frase son: " + vocales);