const usuario = {
    edad: 19,
    pais: 'España',
    ticket: false
}

if(usuario.edad >= 18){
    console.log('usuario es mayor de edad, puede entrar.')
}else{
    console.log('usuario no es mayor de edad, no puede entrar.')
}

if((usuario.edad >= 18) && usuario.ticket){
    console.log('puede entrar.')
}else{
    console.log('no puede entrar.')
}

if(usuario.edad >= 18){
    if(usuario.ticket){
        console.log('usuario es mayor de edad y tiene ticket')
    }else{
        console.log('usuario es mayor de edad pero no tiene ticket')
    }
}else{
    console.log('usuario no es mayor de edad, no puede entrar.')
}
if(usuario.pais == 'España'){
    console.log('usuario es Español')
}else if(usuario.pais == 'Italia'){
    console.log('usuario es Italiano')
}else{
    console.log('pais no tratado')
}

//switch
switch(usuario.pais){
    case 'España':
        console.log('usuario es Español')
        break
    case 'Italia':
        console.log('usuario es Italiano')
        break
    default:
        console.log('pais no tratado')
}

//operador ternario
const boleto = 'vip'
let codigoDeAcceso

if(boleto == 'vip'){
    codigoDeAcceso = 'VIP-12-23'
}else{
    codigoDeAcceso = 'REG-56-56'
}

console.log(codigoDeAcceso)

const boleto2 = 'regular'
const codigoDeAcceso2 = boleto2=='vip' ? 'VIP-12-23' : 'REG-56-56'

console.log(codigoDeAcceso2)

boleto2=='vip' 
    ? console.log('boleto vip') 
    : console.log('boleto regular')