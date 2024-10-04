//console.log(window)
//window.alert('hola')

console.log(`La ventana del navegador mide ${window.innerWidth}px de ancho`)
console.log(`La ventana del navegador mide ${window.innerHeight}px de alto`)

let ventana
const abrirVentana =()=>{
    //window.open('https://google.com','Mi nueva ventana','width=500,height=500')
    ventana = window.open('','Mi nueva ventana','width=500,height=500')
    ventana.document.write('<h1>Hola ventana nueva</h1>')
}

const cerrarVentana=()=>{
    if(ventana){
        ventana.close()
    }
}

//Screen
console.log('Ancho de pantalla: '+window.screen.width)
console.log('Alto de pantalla: '+window.screen.height)

console.log('Ancho de pantalla sin barra de windows: '+window.screen.availWidth)
console.log('Alto de pantalla sin barra de windows: '+window.screen.availHeight)