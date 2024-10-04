const usuario = {
    nombre: 'Luis',
    edad: 30,
    amigos: ['Mario','Alex','Manuel'],
    saludo:()=>{
        console.log('Hola')
    }
}

usuario.saludo()

const keys = Object.keys(usuario)
const values = Object.values(usuario)
const propiedades = Object.entries(usuario)

console.log(keys)
console.log(values)
console.log(propiedades)