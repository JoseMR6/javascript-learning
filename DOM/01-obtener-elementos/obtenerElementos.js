const contenedor1 = document.getElementById('contenedor1')

console.log(contenedor1)

console.log(contenedor1.children)

console.log(contenedor1.parentElement)

const divs = document.getElementsByTagName('div')

console.log(divs)
console.log(`Tenemos ${divs.length} divs en la página`)

const contenedores = document.getElementsByClassName('contenedor')

console.log(contenedores)

const caja1 = document.querySelector('#contenedor1 .caja')
console.log(caja1)

const cajas = document.querySelectorAll('#contenedor1 .caja')
console.log(cajas)

cajas.forEach(caja => {
    console.log(caja)
});

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child')
console.log(ultimaCaja)
console.log(ultimaCaja.closest('.contenedor-principal'))

const contenedor2 = document.getElementById('contenedor2')
console.log(contenedor2.querySelectorAll('.caja'))
