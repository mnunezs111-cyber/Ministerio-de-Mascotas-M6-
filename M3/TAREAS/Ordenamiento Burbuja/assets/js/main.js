window.alert("Ingrese 3 números.");

let lista=[]
for (let i=0;i<3;i++){
    contador=i+1;
    var num = parseFloat(prompt("Ingrese número " + contador + ":")); 

        if (isNaN(num)) {
        alert("Por favor ingrese un número válido");
        i--; // repetir la misma posición
        continue;
        }

    lista.push(num);
}

do{
    n=0;
    for (let i=1; i<lista.length; i++)
        if (lista[i-1]>lista[i]){
            temp=lista[i-1];
            lista[i-1]=lista[i];
            lista[i]=temp;
            n=i;
        }
} while (n!=0);

// Arreglo ordenado
document.write("Arreglo ordenado (burbuja): [" + lista.join(", ") + "]<br/>");

if (lista[0]==lista[lista.length-1]) {
    document.write("Los 3 números son iguales");    
} else{
    document.write("El menor de los números que ingresaste es "+ lista[0]);
    document.write("<br/>El mayor de los números que ingresaste es "+ lista[lista.length-1]);
}