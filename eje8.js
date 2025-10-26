let opcion;

while (true) {
    opcion = parseInt(prompt(
        "MENÚ DE OPCIONES:\n" +
        "1. Calcular área del círculo\n" +
        "2. Calcular área del rectángulo\n" +
        "3. Salir\n" +
        "Ingrese una opción:"
    ));

    if (opcion === 3) {
        console.log("Programa terminado.");
        break;
    }

    switch (opcion) {
        case 1:
            let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
            if (isNaN(radio) || radio <= 0) {
                console.log("Radio inválido. Intente de nuevo.");
                break;
            }
            console.log("Radio ingresado: " + radio);
            const areaCirculo = Math.PI * radio * radio;
            console.log("El área del círculo es: " + areaCirculo.toFixed(2));
            break;

        case 2:
            let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
            
            let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
            if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
                console.log("Valores inválidos. Intente de nuevo.");
                break;
            }
            console.log("Base ingresada: " + base + ", Altura ingresada: " + altura);
            const areaRect = base * altura;
            console.log("El área del rectángulo es: " + areaRect.toFixed(2));
            break;

        default:
            console.log("Opción inválida. Intente nuevamente.");
            break;
    }

}
