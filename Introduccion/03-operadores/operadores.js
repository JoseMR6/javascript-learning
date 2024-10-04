//operadores aritmeticos
const resultado = 3 + 4
const resultado2 = 6 - 4
const resultado3 = 13 % 4    //modulo
const resultado4 = 2 * 3
const resultado5 = 13 / 4

console.log(resultado)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)

let numero = 1
console.log(numero)

numero++
console.log(numero)

numero--
console.log(numero)

//operadores de Asignacion

let numero2 = 10
console.log(numero2)

numero2 += 5
console.log(numero2)

numero2 %= 2
console.log(numero2)

numero2 -= 2
console.log(numero2)

numero2 *= 2
console.log(numero2)

numero2 += 9
console.log(numero2)

numero2 /= 3
console.log(numero2)

//operadores de Comparacion
const comparacion = 5 > 2
const comparacion2 = 6 >= 6
const comparacion3 = 6 <= 6
const comparacion4 = 2 < 6
const comparacion5 = 30 == 30
const comparacion6 = 30 == '30'
const comparacion7 = 30 === '30'
const comparacion8 = 30 != '30'
const comparacion9 = 30 !== '30'
const comparacion10 = 2 < 6 ? 'valor 1 es menor que el 2' 
    : 'valor 1 no es menor que el 2'    //? permite ejecutar una operacion si la anterior es true

console.log(comparacion)
console.log(comparacion2)
console.log(comparacion3)
console.log(comparacion4)
console.log(comparacion5)
console.log(comparacion6)
console.log(comparacion7)
console.log(comparacion8)
console.log(comparacion9)
console.log(comparacion10)

//Operadores Lógicos
const nombre = 'Maria'
const edad = 17
const tieneEntrada = true
const tienePermiso = true 

const permitirAcceso = edad >= 18 && tieneEntrada
console.log('Acceso permitido: '+permitirAcceso)


const permitirAcceso2 = edad >= (18 && tieneEntrada) || (tienePermiso && tieneEntrada)
console.log('Acceso permitido: '+permitirAcceso2)


const variable = true
console.log(variable)

const variable2 = !variable
console.log(variable2)