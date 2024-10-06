const boton1 = document.getElementById('boton1')
console.log(boton1)
const primeraCaja = document.querySelector('.caja')

boton1.addEventListener('click',(e)=>{
    //console.log('click en boton 1')
    //console.log(e)
    primeraCaja.classList.toggle('activa')
})

const cajas = document.querySelectorAll('.caja')

cajas.forEach((caja)=>{
    caja.addEventListener('click',(e)=>{
        //e.stopPropagation()
        console.log('has hecho cleck en la caja '+e.target.innerHTML)
    })
})

//propagacion de eventos
const contenedor = document.getElementById('contenedor1')

contenedor.addEventListener('click',(e)=>{
    console.log('Hiciste click ene el contenedor')
},true)

//eleminar eventos
const boton2 = document.getElementById('boton2')
const boton3 = document.getElementById('boton3')

const toggleClase=()=>{
    primeraCaja.classList.toggle('activa')
}

boton2.addEventListener('click',()=>{
    primeraCaja.addEventListener('click',toggleClase)
})

boton3.addEventListener('click',()=>{
    primeraCaja.removeEventListener('click',toggleClase)
})