const formulario = document.forms['formulario-donacion']

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    console.log('Enviando datos')
})

formulario.pais.addEventListener('change',(e)=>{
    console.log('El pais cambio')
    console.log('el nuevo valor es: '+e.target.value)
})

formulario['cantidad-5'].addEventListener('change', ()=>{
    console.log('la cantidad cambio')
})

formulario['cantidad-10'].addEventListener('change', ()=>{
    console.log('la cantidad cambio')
})

formulario.correo.addEventListener('focus',()=>{
    console.log('El input correo es el foco de atencion')
})

formulario.correo.addEventListener('blur',()=>{
    console.log('El input correo ya no es el foco de atencion')
})

formulario.correo.addEventListener('keydown',(e)=>{
    console.log(e)
})

formulario.correo.addEventListener('keyup',(e)=>{
    console.log(e)
})