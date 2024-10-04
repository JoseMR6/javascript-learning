function saludo(){
    console.log('hola')
}

saludo()

const variable = saludo
console.log(variable)

const saludo2 = function(){
    console.log('hola 2')
}

saludo2()

const saludo3 = () => {
    console.log('hola 3')
}
saludo3()

//parametros
const saludo4 = (nombre = 'amigo') => {
    console.log('hola '+nombre)
}

saludo4('Pepe')
saludo4('Mario')
saludo4()

const operacion = (tipo,numero1, numero2) => {
    if(tipo == 'suma'){
        console.log(numero1 + numero2)
    }else if(tipo == 'resta'){
        console.log(numero1 - numero2)
    }
    
}

operacion('suma',2,5)
operacion('resta',6,3)

//return
const operacion2 = (tipo,numero1, numero2) => {
    let resultado

    if(!tipo) return
    
    if(tipo == 'suma'){
        resultado=(numero1 + numero2)
    }else if(tipo == 'resta'){
        resultado=(numero1 - numero2)
    }
    
    return resultado
}

const variable2 = operacion2('suma',4,5)
console.log(variable2)

const variable3 = operacion2(4,5)
console.log(variable3)