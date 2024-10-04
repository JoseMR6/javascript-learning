class Usuario {
    tipo = 'usuario'

    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido

        console.log('nuevo usuario registrado')
    }

    obtenerNombreCompleto(){
        console.log('Obteniendo datos...')
        return (this.nombre + ' ' + this.apellido)
    }
}

const usuario = new Usuario('Carlos','Perez')
console.log(usuario)

const usuario2 = new Usuario('Pedro','Gimenez')
console.log(usuario2.nombre + ' ' + usuario2.apellido)

const nombreCompleto = usuario.obtenerNombreCompleto()
console.log(nombreCompleto)

//herencia
class Usuario2 {
    constructor(usuario, password){
        this.usuario = usuario
        this.password = password
    }

    obtenerPosts(){
        const posts = ['post1','post2']
        return posts
    }
}

class Moderador extends Usuario2 {
    constructor(usuario, password, permisos){
        super(usuario, password)
        this.permisos = permisos
    }

    borrarPost(id){
        if(this.permisos.includes('borrar')){
            console.log('El post de id '+id+' ha sido borrado')
        }else{
            console.log('no tienes permisos de borrar')
        }
    }
}

const usuario3 = new Usuario2('Mario', '123')
console.log(usuario3.obtenerPosts())

const moderador = new Moderador('Pepe','456',['borrar','editar'])
console.log(moderador.obtenerPosts())
console.log(moderador.permisos)
moderador.borrarPost(3)

//metodos estaticos
class Usuario3 {
    static registrados=1000
    
    constructor(nombre, correo){
        this.nombre = nombre
        this.correo = correo
    }

    static borrarUsuario(idUsuario){
        this.registrados--
        console.log('Usuario '+idUsuario+' borrado')
    }
}

const usuario4 = new Usuario3('Luis', 'correo@correo.com')
console.log(usuario4)

Usuario3.borrarUsuario(2)
console.log(Usuario3.registrados)