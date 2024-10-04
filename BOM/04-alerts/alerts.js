window.alert('Hola usuario')

const ingresar=()=>{
    const mayorEdad = confirm('Eres mayor de Edad?')
    if(mayorEdad){
        console.log('hola')
    }else{
        console.log('mal')
    }
}

const saludar = ()=>{
    const nombre = prompt('Escribe tu nombre')
    console.log('hola '+nombre)
}