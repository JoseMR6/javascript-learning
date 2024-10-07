//API comunicacion con servicio externo
//local storage
document.getElementById('boton1').addEventListener('click',()=>{
    const nombre = prompt('Escribe tu nombre')
    window.localStorage.setItem('usuario', nombre)
})

document.getElementById('boton2').addEventListener('click',()=>{
    window.localStorage.removeItem('usuario')
})

console.log(window.localStorage.getItem('usuario'))

if(window.localStorage.usuario){
    console.log('hola '+window.localStorage.usuario)
}else{
    console.log('sesion no iniciada')
}