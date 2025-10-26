let suma = 0;
let nota;

for (let i = 0; i < 5; i++) {
    do {
    nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + ":"));
    console.log("Nota" + (i+1) + ": " + nota);
    } while (nota < 0 || nota > 20 || isNaN(nota));
    
    suma += nota;
}
let promedio = suma / 5;

console.log("El promedio de las notas es: " + promedio);