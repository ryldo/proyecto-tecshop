var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

var user_schema = new Schema({
    usuario:String,
    password:String,
    nombre:String,
    apellidos:String,
    edad:String,
    email:String
})

 const Usuario = mongoose.model('usuario',user_schema,'usuario')

 module.exports = {
    create: (req,res) => {
        let user = new Usuario()
        user.usuario = req.body.usuario,
        user.password = req.body.password,
        user.nombre = req.body.nombre,
        user.apellidos = req.body.apellidos,
        user.edad = req.body.edad,
        user.email = req.body.email
    
        user.save((err, user) => {
        if(err){console.log(err)}
        res.send(user)
    })
    },
    Usuario
}