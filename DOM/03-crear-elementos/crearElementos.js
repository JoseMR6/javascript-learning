const agregarCaja=()=>{
    //crear elemento
    const nuevaCaja=document.createElement('div')
    
    //agregar atributos
    nuevaCaja.innerHTML = 'Nueva Caja'
    nuevaCaja.setAttribute('id', 'nuevo-id')
    nuevaCaja.setAttribute('class','caja activa')

    //agregar elemento al DOM
    const contenedor = document.getElementById('contenedor1')
    //contenedor.appendChild(nuevaCaja)
    //contenedor.insertAdjacentElement('afterbegin',nuevaCaja)
    document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja)
}