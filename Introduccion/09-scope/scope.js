//scope Global

var nombre = 'Mario'
console.log(nombre)

const saludo = () => {
    console.log('Hola ' + nombre)

    nombre='Pepe'
    console.log('nuevo nombre es ' + nombre)
}
saludo()

//scope local
var numero = 1
var obtenerNumeroLetras = (para) => {
    var numero = nombre.length
    console.log(para+' tiene '+numero+' letras')

    var funcionAnidada = () => {
        console.log(numero)
    }
    funcionAnidada()
}
obtenerNumeroLetras('Luis')
console.log(numero)

//scope bloque {}
const edad = 19
//let accesoPermitido = false
if(edad >= 18){
    const accesoPermitido = true
    console.log(accesoPermitido)

    if(true){
        console.log(accesoPermitido)
    }

    const miFuncion = () => {
        console.log(accesoPermitido)
    }
    miFuncion()
}

const accesoPermitido = 'SI'
console.log(accesoPermitido)

//posible problema de variables globales
if(true){
    var nombre2 = 'Luis'
    let nombre3 = 'Marco'
}

console.log(nombre2)
//console.log(nombre3)
