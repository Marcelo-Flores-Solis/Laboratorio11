let numero;

while (true){

    numero = parseInt(prompt("Ingrese un número para ver su tabla (-1 para terminar):"));
    
    if (numero === -1) {
        console.log("Programa terminado.");
        break;
    }

    console.log("Tabla de multiplicar del " + numero + ":");
    for (let i = 1; i <= 12; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }

}