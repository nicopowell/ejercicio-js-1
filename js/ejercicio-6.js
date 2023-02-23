// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

if(num1 > num2){
    document.write(num1 + " es mayor que " + num2)
} else if (num2 > num1){
    document.write(num2 + " es mayor que " + num1)
} else {
    document.write("Los números ingresados son iguales")
}