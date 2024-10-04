const nombres = ['Carlos','Cristian','Alex','Estefan','Manolo','Pepe','Carmelo']
nombres.forEach((nombre)=>{
    console.log(nombre)
})

for(let i=0; i<nombres.length; i++){
    console.log(nombres[i])
}

for(let i=0; i<nombres.length; i++){
    if(nombres[i][0]!='C'){
        console.log(nombres[i]+' no empieza pr C')
        break
    }
    
    console.log(nombres[i])
}

console.log('lista de personas 1ue empizan por C')

for(let i=0;i<nombres.length;i++){
    if(nombres[i][0]!='C'){
        continue
    }
    
    console.log(nombres[i])
}

let constador = 0
while(constador < 10){
    console.log(constador)
    constador++
}


let i = 100
do{
    console.log(i)
    i++
}while(i<10)

const amigos = ['Mario','Pedro','Luis']
amigos.forEach((amigo, index)=>{
    console.log(`El amigo #${index} es: ${amigo}`)
})

const persona = {
    nombre: 'Carlos',
    edad: 19,
    correo: 'correo@correo.com'
}

for(propiedad in persona){
    console.log(propiedad+': '+persona[propiedad])
}

const etiquetas = document.head.children
console.log(etiquetas)

for(elemento of etiquetas){
    console.log(elemento)
}

[...etiquetas].forEach((elemento)=>{
    console.log(elemento)
})