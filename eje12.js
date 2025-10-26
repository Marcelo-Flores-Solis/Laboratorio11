let presupuesto = parseFloat(prompt("Ingrese su presupuesto máximo:"));
let total = 0;
let continuar;

while (true) {
    let precio = parseFloat(prompt("Ingrese el precio del producto (o -1 para terminar):"));

    if (precio === -1) {
        console.log("Finalizando compra...");
        break;
    }

    if (isNaN(precio) || precio < 0) {
        console.log("Precio inválido. Intente nuevamente.");
        continue;
    }

    if (total + precio > presupuesto) {
        console.log("No puede agregar este producto, supera su presupuesto.");
        break;
    }

    total += precio;
    console.log("Producto agregado. Total actual: $" + total.toFixed(2));

    continuar = prompt("¿Desea agregar otro producto? (S/N):");
    if (continuar.toUpperCase() !== "S") {
        break;
    }
}

console.log("Total parcial a pagar: $" + total.toFixed(2));

let totalFinal = total;

if (total > 100) {
    console.log("Tiene un descuento del 10%.");
    totalFinal = total * 0.9;
} else if (total >= 50 && total <= 100) {
    console.log("Gana un cupón de 5%.");
    totalFinal = total * 0.95;
} else {
    console.log("No aplica descuento.");
}

console.log("Total final a pagar: $" + totalFinal.toFixed(2));
