let edad;

edad = parseInt(prompt("Ingrese su edad:"));
console.log("Edad ingresada: " + edad);

if ( edad >= 60) {
    console.log("Usted es un adulto mayor.");
} else if (edad >= 18) {
        console.log("Usted es un adulto.");
    } else if (edad >= 13) {
        console.log("Usted es un adolescente.");
        } else {
        console.log("Usted es un niño.");
        }