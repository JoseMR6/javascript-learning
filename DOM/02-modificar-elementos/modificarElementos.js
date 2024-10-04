const primeraCaja = document.querySelector('.caja')
console.log(primeraCaja.innerHTML)
primeraCaja.innerHTML = '<b>Hola</b>'
primeraCaja.id = 'nuevo-id'

primeraCaja.setAttribute('class','caja activa')
primeraCaja.setAttribute('data-id', '123-456-789')

const contenedor2Caja1 = document.querySelector('#contenedor2 .caja')
console.log(contenedor2Caja1)
contenedor2Caja1.style.background = '#000'
contenedor2Caja1.style.color = '#fff'
contenedor2Caja1.style.textTransform = 'uppercase'