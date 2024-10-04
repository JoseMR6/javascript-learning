const frutas = ['Manzana','Pera','Piña','Melon','Uvas']
const comidaFavorita = ['Pizza','Sushi',...frutas]
console.log(comidaFavorita)

const datosLogin = {
    correo: 'correo.@correo.com',
    password: '123'
}

const usuario ={
    nombre: 'Carlos',
    edad: 25,
    ...datosLogin
}
console.log(usuario)


//parámetros Rest
const registrarUsuario = (nombre, correo, ...datosAdicionales)=>{
    console.log(nombre, correo, datosAdicionales)
}

registrarUsuario('Pedro','correo@correo.com')
registrarUsuario('Alex','Alex@correo.com', 24,'España')

//destructuracion de objetos
const amigos = ['Alejandro','Cesar','Manuel']
//const primerAmigo = amigos[0]
//const segundoAmigo = amigos[1]
const [primerAmigo,segundoAmigo] = amigos

console.log(primerAmigo)
console.log(segundoAmigo)

const persona = {
    nombre: 'Carlos',
    edad: 24,
    pais: 'Italia'
}

const {nombre, pais, edad} = persona
console.log(nombre,pais)

const mostrarEdad = ({nombre, edad})=>{
    console.log(`${nombre} tiene ${edad} años`)
}
mostrarEdad(persona)