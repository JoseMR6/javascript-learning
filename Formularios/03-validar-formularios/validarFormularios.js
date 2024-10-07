const formulario = document.getElementById('formulario-donacion')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    const datos = {
        correo: formulario.correo.value,
        pais: formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha: formulario.fecha.value,
        terminos: formulario['terminos-y-condiciones'].checked
    }

    if(datos.correo.length <= 2){
        console.log('Correo invalido')
        return
    }

    //comprobar correo con expresiones regulares
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
    if(!expresionRegular.test(datos.correo)){
        console.log('correo no valido')
        return
    }

    if(datos.pais == ""){
        console.log('pais invalido')
        return
    }

    if(datos.donacion == ""){
        console.log('donacion invalido')
        return
    }

    if(datos.fecha == ""){
        console.log('fecha invalido')
        return
    }

    if(!datos.terminos){
        console.log('terminos invalido')
        return
    }

    //console.log(formulario.correo.value)
    //console.log(formulario.pais.value)
    console.log(datos)
})