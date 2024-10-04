const personaArray = ['Luis', 19, 'correo@correo.com', true, true] 

const persona = {
    nombre: 'Luis',
    edad: 19,
    correo: 'correo@correo.com',
    suscripciones: {
        web: true,
        correo: true
    },
    coloresFavoritos: ['Negro','Rojo'],
    saludo: function () {
        alert('Hola')
    }
}  

console.log(persona);
console.log(persona.nombre);
console.log(persona['edad']);

const variable = 'correo'
console.log(persona[variable]);

console.log(persona.suscripciones.web)

persona.pais = 'España'
console.log(persona)

persona.saludo()