let dinero;

while (true) {
    dinero = parseFloat(prompt("Ingrese la cantidad de dinero que tiene (-1 para terminar):"));
     
    if (dinero === -1) {
        console.log("Programa terminado.");
        break;
    }
    if (dinero < 0) {
        console.log("Cantidad inválida. Intente de nuevo.");
        continue;
    }
    

    billetes100 = Math.floor(dinero / 100);
    dinero %= 100;
    billetes50 = Math.floor(dinero / 50);
    dinero %= 50;
    billetes20 = Math.floor(dinero / 20);
    dinero %= 20;
    billetes10 = Math.floor(dinero / 10);
    dinero %= 10;

    monedas5 = Math.floor(dinero / 5);
    dinero %= 5;
    monedas2 = Math.floor(dinero / 2);
    dinero %= 2;
    monedas1 = dinero;

    console.log("El dinero");
    console.log("Billetes de 100: " + billetes100);
    console.log("Billetes de 50: " + billetes50);
    console.log("Billetes de 20: " + billetes20);
    console.log("Billetes de 10: " + billetes10);
    console.log("Monedas de 5: " + monedas5);
    console.log("Monedas de 2: " + monedas2);
    console.log("Monedas de 1: " + monedas1);
}   