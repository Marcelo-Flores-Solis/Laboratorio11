let opcion;

while (true) {
    opcion = parseInt(prompt(
        "MENÚ PRINCIPAL:\n" +
        "1. Calcular estadísticas de N notas\n" +
        "2. Contar números pares e impares en un rango\n" +
        "3. Generar una tabla de multiplicar\n" +
        "4. Salir\n" +
        "Ingrese una opción:"
    ));

    if (opcion === 4) {
        console.log("Programa terminado.");
        break;
    }

    switch (opcion) {
        case 1:
            console.log("Cálculo de estadísticas de N notas:");
            let cantidad = parseInt(prompt("¿Cuántas notas desea ingresar?:"));
            if (isNaN(cantidad) || cantidad <= 0) {
                console.log("Cantidad inválida. Intente de nuevo.");
                break;
            }

            let suma = 0;
            let max = -Infinity;
            let min = Infinity;
            let pares = 0;
            let impares = 0;

            // --- PRIMERA PASADA: obtener suma, min, max, pares e impares ---
            for (let i = 1; i <= cantidad; i++) {
                let nota = parseFloat(prompt("Ingrese la nota " + i + ":"));
                if (isNaN(nota)) {
                    console.log("Nota inválida.");
                    i--;
                    continue;
                }
                console.log("Nota ingresada: " + nota);
                suma += nota;
                if (nota > max) max = nota;
                if (nota < min) min = nota;
                if (nota % 2 === 0) pares++; else impares++;
            }

            let promedio = suma / cantidad;

            // --- SEGUNDA PASADA: contar cuántas están por encima del promedio ---
            let encimaPromedio = 0;
            for (let i = 1; i <= cantidad; i++) {
                let nota = parseFloat(prompt("Ingrese nuevamente la nota " + i + " para comparar con el promedio:"));
                if (isNaN(nota)) {
                    console.log("Nota inválida. ");
                    i--;
                    continue;
                }
                console.log("Nota ingresada para comparación: " + nota);
                if (nota > promedio) encimaPromedio++;
            }

            console.log("Promedio: " + promedio.toFixed(2));
            console.log("Nota máxima: " + max);
            console.log("Nota mínima: " + min);
            console.log("Cantidad de pares: " + pares);
            console.log("Cantidad de impares: " + impares);
            console.log("Cantidad por encima del promedio: " + encimaPromedio);
            console.log("-------------------------------");
            break;

    
        case 2:
            console.log("Contador de números pares e impares en un rango:");
            let inicio = parseInt(prompt("Ingrese el inicio del rango:"));
            let fin = parseInt(prompt("Ingrese el final del rango:"));
            if (isNaN(inicio) || isNaN(fin) || inicio > fin) {
                console.log("Rango inválido.");
                break;
            }

            let paresR = 0;
            let imparesR = 0;

            for (let i = inicio; i <= fin; i++) {
                if (i % 2 === 0) paresR++;
                else imparesR++;
            }

            console.log("Entre " + inicio + " y " + fin + ":");
            console.log("Pares: " + paresR);
            console.log("Impares: " + imparesR);
            console.log("-------------------------------");
            break;

        case 3:
            console.log("Generador de tabla de multiplicar:");
            let numero = parseInt(prompt("Ingrese el número para generar su tabla de multiplicar:"));
            if (isNaN(numero)) {
                console.log("Número inválido.");
                break;
            }

            console.log("Tabla de multiplicar del " + numero + ":");
            for (let i = 1; i <= 12; i++) {
                console.log(numero + " x " + i + " = " + (numero * i));
            }
            console.log("-------------------------------");
            break;

       
        default:
            console.log("Opción inválida. Intente nuevamente.");
            break;
    }
}
