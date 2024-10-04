const colores = ['Rojo','Verde','Azul']
console.log(colores)
console.log(colores.length)
document.body.innerHTML = colores.toString()

console.log(colores.join('-'))

const letras = ['c','b','d','a']
console.log(letras.sort())

const numeros = [3,2,4,1]
console.log(numeros.sort())

console.log(letras.reverse())
console.log(numeros.reverse())

const array1 = [1,2,3]
const array2 = ['A','B','C']
const array3 = array1.concat(array2)
console.log(array3)
console.log(array1)

colores.push('Amarillo')
console.log(colores)

colores.pop()
console.log(colores)

const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
console.log(dias)

const diaEliminado = dias.shift()
console.log(diaEliminado)
console.log(dias)

dias.unshift('Lunes2')
console.log(dias)

const amigos = ['Luis','Pepe','Alex']
console.log(amigos)
amigos.splice(1,2,'Manolo','Mario')
console.log(amigos)
amigos.splice(0,0,'Pepe','Alex')
console.log(amigos)

const frutas = ['Fresa','Manzana','Uva','Piña','Mango','Naranja','Melon']
const frutasFavoritas = frutas.slice(1,5)
console.log(frutasFavoritas)
console.log(frutas)

const dias2 = ['Lunes','Martes','Miercoles','Jueves','Miercoles','Viernes','Sabado','Domingo']
console.log(dias2)
console.log(dias2.indexOf('Miercoles'))
console.log(dias2.lastIndexOf('Miercoles'))

dias2.forEach((dia, index)=>{
    console.log('elemento '+dia+' posicion '+index)
})

const resultado = dias2.find((dia)=>{
    if(dia[0]=='S'){
        return dia
    }
})

console.log(resultado)

console.log(dias2)

const diasMayus = dias2.map((dia)=>{
    return dia.toUpperCase()
})

console.log(dias2)
console.log(diasMayus)

const diasConM=dias2.filter((dia)=>{
    if(dia[0]=='M')return dia
})
console.log(diasConM)

console.log(dias2.includes('Lunes2'))
console.log(dias.includes('Lunes2'))

const dias3 = ['Lunes','Martes','Miercoles','Jueves',1,'Viernes','Sabado','Domingo']

const diasValidos = dias3.every((dia)=>{
    if(typeof dia == 'string'){
        return true
    }else{
        return false
    }
})
console.log(diasValidos)

const diasValidos2 = dias3.some((dia)=>{
    if(typeof dia == 'string'){
        return true
    }else{
        return false
    }
})
console.log(diasValidos2)