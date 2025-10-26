let numero;
console.log("Suma de números desde 1 hasta N excluyendo múltiplos de 5");

while (true){
    numero = parseInt(prompt("Ingrese un número para sumarlo hasta ese mismo (-1 para terminar):"));
    let suma = 0;
    if (numero === -1) {
        console.log("Programa terminado.");
        break;
    }   
    if (numero < -1) {
        console.log("Número inválido. Intente de nuevo.");
        continue;
    }
    for (let i = 1; i <= numero; i++) {
        if (i % 5 !== 0) {
            suma += i;
        }
    }
    console.log("La suma de los números desde 1 hasta " + numero + " es: " + suma);
    
}
