let diametroRueda = prompt("Ingrese Diametro de la Ruedad");
let grosorRueda = prompt("Ingrese Grosor de la Rueda");

//validacion
if (diametroRueda > 1.4 && grosorRueda < 0.4) {
    if (diametroRueda <= 1.4 && diametroRueda > 0.8 && grosorRueda < 0.25)
        alert("El grosor para esta rueda es inferior al recomendado");
} else {
    alert("El Grosor para esta Rueda es Optimo!!!");
}