const primeraCaja = document.querySelector('#contenedor1 .caja')
console.log(primeraCaja.classList)

const agregarClase=()=>{
    primeraCaja.classList.add('activa')
}

const eliminarClase=()=>{
    primeraCaja.classList.remove('activa')
}

const toggleClase=()=>{
    primeraCaja.classList.toggle('activa')
}

const comprobarClase=()=>{
    if(primeraCaja.classList.contains('activa')){
        console.log("clase activa")
    }else{
        console.log("clase no activa")
    }
    
    console.log("lista de clases:")
    primeraCaja.classList.forEach(clase => {
        console.log(clase)
    });
}

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child')
ultimaCaja.style.background = '#000'
ultimaCaja.style.color = '#fff'

const cajas = document.querySelectorAll('.caja')
console.log(cajas)
let tamanio = 24

const incrementarFuente = ()=> {
    tamanio++
    
    cajas.forEach((caja)=>{
        caja.style.fontSize = tamanio+'px'
    })
}

const disminuirFuente = ()=> {
    tamanio--
    
    cajas.forEach((caja)=>{
        caja.style.fontSize = tamanio+'px'
    })
}