let numero;

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
        suma += i;
    }
    console.log("La suma de los números desde 1 hasta " + numero + " es: " + suma);
}
