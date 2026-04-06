// Mensaje inicial
window.alert("Para el conjunto de los enteros. Adivina el número del 1 al 10. Tienes 3 oportunidades");

// Número aleatorio entre 1 y 10
let numAzar = Math.floor(Math.random() * 10) + 1;

// Lista para guardar los números 
let lista = [];

// Función para revisar si el número ya fue usado
function revisarLista(lista, numero) {
    if (lista.length === 0) {
        lista.push(numero);
        return true;
    }
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            window.alert("Ya has elegido este número.");
            return false;
        }
    }
    lista.push(numero);
    return true;
}

// Ciclo de 3 intentos
for (let i = 0; i < 3; i++) {
    let verificador = 0;
    while (verificador === 0) {
        let contador = i + 1;
        let num = parseInt(prompt("Intento número " + contador + ":"), 10);

        
        if (num > 10) {
            window.alert("El número es mayor que 10");
        } else if (num <= 0) {
            window.alert("El número es menor o igual que 0");
        } else {
            
            if (num === numAzar && revisarLista(lista, num) === true) {
                window.alert("Has Acertado!");
                document.write("GANASTE!");
                i = 3; 
                verificador = 1; 
            } else if (num !== numAzar && revisarLista(lista, num) === true) {
                window.alert("No has acertado!");
                if (i === 2) { 
                    document.write("Se acabaron los intentos<br>");
                    document.write("El número era " + numAzar);
                }
                verificador = 1; 
            }
        }
    }
}


