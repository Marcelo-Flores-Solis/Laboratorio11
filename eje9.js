let numero;

while (true) {
    numero = parseInt(prompt("Ingrese un número para verificar si es Armstrong (-1 para terminar):"));

    if (numero === -1) {
        console.log("Programa terminado.");
        break;
    }

    if (isNaN(numero) || numero < 0) {
        console.log("Número inválido. Intente de nuevo.");
        continue;
    }

    let copia = numero;
    let suma = 0;
    let contador = 0;

    let temp = numero;
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        contador++;
    }

    temp = numero;
    while (temp > 0) {
        let digito = temp % 10;
        suma += Math.pow(digito, contador);
        temp = Math.floor(temp / 10);
    }

    if (suma === copia) {
        console.log(numero + " es un número Armstrong.");
    } else {
        console.log(numero + " no es un número Armstrong.");
    }
}
