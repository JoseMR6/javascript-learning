
const numero = 10
console.log(numero, typeof numero)

const texto = numero.toString()
console.log(texto, typeof texto)

const numero2 = 3.1415
console.log(numero2)
console.log(numero2.toFixed())
console.log(numero2.toFixed(2))

/*const numero3 = prompt('Escribe un numero')
const numero4 = parseInt(prompt('Escribe otro numero'))
const numero5 = parseInt(prompt('Escribe otro numero mas'))
console.log(numero3, typeof numero3)
console.log(numero4 + numero5)

const numero6 = parseFloat(prompt('Escribe otro numero'))
const numero7 = parseFloat(prompt('Escribe otro numero mas'))
console.log(numero6 + numero7)*/

const numero8 = Math.random()
console.log(numero8)

console.log(Math.floor('2.7'))
console.log(Math.ceil('2.2'))
console.log(Math.round('2.7'))
console.log(Math.round('2.2'))

const numero9 = Math.random()
console.log(Math.floor(numero9*100))    //numeros entre 0 y 99