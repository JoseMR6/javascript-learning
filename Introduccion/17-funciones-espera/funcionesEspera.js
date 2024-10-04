//callbacks
const obtenerPostsDeUsuario = (usuario, callback)=>{
    console.log('Obteniendo los posts de '+usuario)

    setTimeout(()=>{
        let posts = ['post1','post2','post3']
        callback(posts)
    },2000)
}

obtenerPostsDeUsuario('Mario',(posts)=>{
    console.log(posts)
})

//promesas
const promesa = new Promise((resolve, reject) => {
    //accion a ejecutar
    setTimeout(()=>{
        const exito = true

        if(exito){
            resolve('La operacion tuvo exito')
        }else{
            reject('No tuvo exito')
        }
    }, 4000)
})

//ejecucion correcta
promesa.then((mensaje)=>{
    alert(mensaje)
})

//ejecucion erronea
promesa.catch((mensaje)=>{
    alert(mensaje)
})

const fetchPosts = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const posts = ['Post1','Post2','Post3']
            const error = false

            if(error){
                reject('Error al intentar obtener posts')
            }else{
                resolve(posts)
            }
        },2000)
    })
}

console.log('Inicia operacion')
fetchPosts().then((posts)=>{
    console.log(posts)
}).catch((error)=>{
    console.log(error)
})
console.log('Finaliza operacion')

//Async Await
const mostrarPosts= async()=>{
    try{
        const posts = await fetchPosts()
        console.log(posts)
    } catch(error){
        console.log(error)
    }
}

mostrarPosts()