// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let num = parseInt(prompt("Ingrese un número:"));

if (num % 2 === 0) {
    document.write(`<p>${num} es divisible por 2</p>`);
}
if (num % 3 === 0) {
    document.write(`<p>${num} es divisible por 3</p>`);
}
if (num % 5 === 0) {
    document.write(`<p>${num} es divisible por 5</p>`);
}
if (num % 7 === 0) {
    document.write(`<p>${num} es divisible por 7</p>`);
}

if (num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0) {
    document.write(`<p>${num} no es divisible por 2, 3, 5 o 7</p>`);
}
