var cantidad= parseInt(prompt("Ingrese cantiad de palabras: "));

//Lista de almacenamiento de palabras
let list=[]
for (let i=0;i<cantidad;i++) {
    contador=i+1;
    var palabra= prompt("Ingrese palabra número "+ contador+": ");
    list.push(palabra);
    
}

// Declara función de contar vocales

const contarVocales = palabra => {
    const vocales = "aáeéiíuú";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}

// Concatenación de palabras

const palabraNueva=list.join("");

const vocales = contarVocales(palabraNueva);

// Resultado Consola
console.log("Todas las palabras ingresadas en total tienen %d vocales", vocales);

// Resultado Alerta
window.alert("Todas las palabras ingresadas en total tienen " + vocales + " vocales");

// Resultado página HTML
document.getElementById("resultado").innerHTML = "Todas las palabras ingresadas en total tienen " + vocales + " vocales.";

