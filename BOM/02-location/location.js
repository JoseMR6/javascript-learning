console.log(window.location.href)
console.log(location.href)

console.log(location.hostname)

console.log(location.pathname)

console.log(location.protocol)

const cargarDocumento = ()=>{
    location.assign('https://google.com')
}

const regresar=()=>{
    history.back()
}

const adelantar=()=>{
    history.forward()
}