//se pueden usar valores null pero no undefined

const datos=`
{
    "id": 1,
    "nombre": "Mario",
    "suscriptor_activo": true,
    "posts":[
        {
            "id": 1,
            "titulo": "Post 1",
            "texto": "texto de Post 1"
        },
        {
            "id": 2,
            "titulo": "Post 2",
            "texto": "texto de Post 2"
        }
    ]
}
`

const objeto = JSON.parse(datos)
console.log(objeto)

const usuario={
    nombre:'Pepe',
    correo:'correo@correo.com',
    coloresFavoritos:['azul','verde','rojo']
}

const textoJson=JSON.stringify(usuario)

console.log(textoJson)