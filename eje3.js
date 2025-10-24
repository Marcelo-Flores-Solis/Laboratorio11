let numero;
let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    numero = parseInt(prompt("Ingrese el número " + i + ":"));
    if (numero % 2 === 0) {
        console.log(numero + " es un número par.");
        pares++;
    } else {
        console.log(numero + " es un número impar.");
        impares++;
    }
}   

console.log("Cantidad de números pares: " + pares);
console.log("Cantidad de números impares: " + impares);