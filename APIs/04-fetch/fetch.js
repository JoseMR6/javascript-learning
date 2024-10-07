const endpoint = 'https://api.npoint.io/9e8895295b544dd62dbc'

fetch(endpoint).then((res) => {
    const respuesta = res.json()

    respuesta.then((datos) => {
        console.log(datos)
    }).catch((error) => {
        console.log(error)
    })

}).catch((error) => {
    console.log(error)
})

const obtenerDatos = async()=>{
    const respuesta = await fetch(endpoint)
    const datos = await respuesta.json()

    console.log(datos)
}
obtenerDatos()