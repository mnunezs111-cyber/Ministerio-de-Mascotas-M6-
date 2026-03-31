var nombre = "Jane Doe"
let edad = 35
const correo = "jane.doe@email.com"
let media = 60
const unidad = "cm"
let curso = "Javascript"
let modulo = `fundamentos`
let detalleCompra = "2 Poleras XL"
const PI = 3.14156


nombre = "Mary Jane Doe"
//correo = "mary.jane.do@gmail.com"

let booleanos = false //o true
let indefinidos = undefined
let nulo = null

let palabra;
let otraPalabra = null

let arreglo = [1, "Hola", true, 5.7, undefined, null, "Mundo"]

let objeto = {
    nombre: "Coni",
    edad: 32,
    programadora: false,
    hobbies: ["nadar", "cocinar", "bicicleta"]
}

//console.log("Hola Mundo")
//console.log(nombre)
//console.log(edad)
//console.log(correo)
//console.log(palabra)
//console.log(otraPalabra)
//console.log(arreglo)
//console.log(typeof curso)
//console.log(typeof arreglo)

let num1 = 6
let num2 = 2
let num3 = '2' //cadena de texto-string

let suma = num1 + num2
console.log(suma)
let resta = num1 - num2
console.log(resta)
let multiplicacion = num1 + num2
console.log(multiplicacion)

let division = num1 / num2
console.lo//g(division)

let potencia = num1 ** num2
console.log(potencia)

let modulo = num1 % num2
console.log(modulo)

//control+k para seleccionar varios textos

let sumaNueva = num1 + num3
console.log(sumaNueva)

let num1Incrementado = ++num1
console.log(num1Incrementado)

let num1Decrementado = --num1
console.log(num1Decrementado)

/* 
let num1 = 6
let num2 = 2
let num3 = '2' //cadena de texto-string

let igualdad = num1 == num2
console.log(igualdad)

let mayorQue = num1 > num2
console.log(mayorQue)

let menorQue = num1 < num2
console.log(menorQue)

let mayorOIgualQue = num1 >= num2
console.log(mayorOIgualQue)

let menorOIgualQue = num1 <= num2
console.log(menorOIgualQue)

let identidad = num1 === num2
console.log(identidad) */

//* operador y logico --> && mayor de edad && ando con carnet
//* operador o logico --> ||

let nombre = "Cesar"
let apellido = 'Osses'
let email = 'cesar.osses@gmail.com'

let frase = 'el profesor dijo que: "javascript es un lenguaje bkn"'
let phrase = "el profesor dijo que : 'javascript es bkn'"


//concatenacion
console.log(nombre + " " + apellido)
console.log('Hola mi nombre es:' + '' + nombre + '' + apellido + '' + 'y mi correo es:' + '' + email)

//interpolacion o templet literals
console.log(`${nombre} ${apellido}`)
console.log(`Hola mi nombre es`)