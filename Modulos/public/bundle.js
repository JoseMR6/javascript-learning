'use strict';

/*export*/ const nombre$1 = 'Manuel';

/*export*/ function obtenerPosts(){
    return ['Post1', 'Post2','Post3']
}

var datos = /*#__PURE__*/Object.freeze({
    __proto__: null,
    nombre: nombre$1,
    obtenerPosts: obtenerPosts
});

/*export default ()=>{
    return{
        nombre: 'Carlos',
        correo: 'correo@correo.com'
    }
}*/

const obtenerUsuario = ()=>{
    return {
        nombre: 'Carlos',
        correo: 'correo@correo.com'
    }
};

console.log('Codigo de empty export');

const nombre = '123';

console.log('usuario se llama '+nombre$1);
console.log(obtenerPosts());
console.log(nombre);

console.log(datos);
console.log(nombre$1);
console.log(obtenerPosts());

console.log(obtenerUsuario());
