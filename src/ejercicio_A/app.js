// se opctienen los datos
let diametroRueda = prompt(
    "Ingrese el Diamerto de la Rueda "
);

// validaciones

if (diametroRueda > 1.4) {
    console.log("La rueda es para un vehículo grande");

} else if (diametroRueda <= 1.4 && diametroRueda > 0.8) {
    console.log("La rueda es para un vehículo mediano");
} else {
    alert("La rueda es para un vehículo pequeño");
}