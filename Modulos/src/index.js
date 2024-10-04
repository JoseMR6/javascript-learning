import { nombre as nombreImportado, obtenerPosts } from "./namedExports";
import * as datos from "./namedExports"
import obtenerUsuario from "./defaultExport"
import './emptyExport'

const nombre = '123'

console.log('usuario se llama '+nombreImportado)
console.log(obtenerPosts())
console.log(nombre)

console.log(datos)
console.log(datos.nombre)
console.log(datos.obtenerPosts())

console.log(obtenerUsuario())