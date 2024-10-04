const texto = 'Hola que ashe'
console.log(texto)
console.log(texto.length)

console.log(texto.indexOf('r'))
console.log(texto.indexOf('q'))

const index = texto.lastIndexOf('a')
const index2 = texto.lastIndexOf('h')
console.log(index)
console.log(texto.slice(index,index2+1))

const texto2 = 'Hola que ashe'
console.log(texto2.replace('ashe', 'dice'))
console.log(texto.split(' '))
console.log(texto2.toLowerCase())
console.log(texto2.toUpperCase())
console.log(texto2)
