//Ejercicio 
// var diametro=prompt("Ingrese el diámetro de la circunferencia")
// radio=diametro/2;
// area=Math.PI*Math.pow(radio,2);
// //Mensaje por consola
// console.log(area);
// //Mensaje por ventana de alerta
// window.alert("El valor del área para la circunferencia de diametro" + diametro + "es igual a" + area);
// //Muestra el resultado en la página
// resultado=document.getElementById("resultado");
// resultado.innerHTML="El valor del área para la circunferencia de diametro " + diametro + " es igual a " + area;

// Pido el diámetro y calculo el área
const d = Number(prompt("Ingrese el diámetro (cm):"));
const r = d / 2;
const area = Math.PI * Math.pow(r, 2);

// Salida en 3 lugares
console.log("Área:", area.toFixed(2), "cm^2");
alert(`Área: ${area.toFixed(2)} cm^2`);
document.getElementById("resultado").textContent =
`Área: ${area.toFixed(2)} cm^2`;