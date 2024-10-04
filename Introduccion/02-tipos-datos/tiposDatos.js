//cadena de texto
const nombre = 'Manolo'
const parrafo = 'Este es un "parrafo"'
const parrafo2 = "Este es un 'parrafo'"
const parrafo3 = 'Este es un \'parrafo\''

console.log(nombre)
console.log(parrafo)
console.log(parrafo2)
console.log(parrafo3)

//Numero
const numero = 6
const numero2 = -6.89

console.log(numero)
console.log(numero2)

//Booleano
const usuarioConectado = false
const mayorQue = 8 > 2

console.log(usuarioConectado)
console.log(mayorQue)

//Arrays
const arreglo = ['texto', 10, false, {propiedad: 'valor'}, [1,2,3]]
console.log(arreglo)

//Objeto
const persona = {
    nombre: 'Mario',
    edad: 42,
    coche: {
        marca: 'Mercedes',
        color: 'blanco'
    }
}

console.log(persona)

//Funcion
function hola(){
    console.log('hola')
}

hola()

//Null
const variableNula = null

console.log(variableNula)

//Undefined
const variableIndefinida = undefined

console.log(variableIndefinida)