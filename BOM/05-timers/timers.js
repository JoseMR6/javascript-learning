const saludo = () => {
    console.log('hola')
}

setTimeout(saludo, 1000)

let id

const iniciar = () => {
    console.log("iniciando timer")
    id = setTimeout(saludo, 1000)
}

const parar = () => {
    if (id) {
        clearTimeout(id)
        console.log("timer parado")
    }
}

let cuenta = 0
let id2

const iniciarInterval = () => {
    id2=setInterval(() => {
        console.log(cuenta)
        cuenta++
    }, 1000)
}

const pararInterval=()=>{
    clearInterval(id2)
}

