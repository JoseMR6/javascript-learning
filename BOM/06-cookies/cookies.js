const crearCookie=()=>{
    //document.cookie = 'nombre=Pepe; expires=4 Oct 2024 12:04:00 UTC'
    //document.cookie = 'nombre=Pepe'
    document.cookie = 'prueba=OtraCookie'
}

const iniciarSesion=()=>{
    const usuario = prompt('Usuario:')
    document.cookie = `nombre=${usuario}`
    alert('Sesion iniciada')
}

console.log(document.cookie)

let usuario
const cookies = document.cookie.split('; ')

console.log(cookies)

let cookiesObject={}

cookies.forEach((cookie)=>{
    const arrayCookie = cookie.split('=')
    cookiesObject[arrayCookie[0]] = arrayCookie[1]
})

console.log(cookiesObject)

if(cookiesObject.nombre){
    console.log('Sesion de '+cookiesObject.nombre)
}else{
    console.log('sesion no iniciada')
}

const cerrarSesion =()=>{
    document.cookie = 'nombre=; expires=4 Oct 2020 12:04:00 UTC'
    console.log('sesion cerrada')
}