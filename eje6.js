let numero; 

while (true){
    numero = parseInt(prompt("Ingrese un número para ver los primos en su rango (-1 para terminar):"));

    if (numero === -1) {
        console.log("Programa terminado.");
        break;
    }

    if (numero < -1) {
        console.log("Número inválido. Intente de nuevo.");
        continue;
    }
    console.log("Números primos entre 1 y " + numero + ":");
    for (let n = 2; n <= numero; n++) {
        let esprimo = true;
        for (let i = 2; i <=  Math.sqrt(n); i++) {
            if (n % i === 0) {
                esprimo = false;
                break;
            }
        }
        if (esprimo) {
            console.log(n + " es un número primo.");
        }
    }
}