const mongoose = require('mongoose')
const u = require('../models/user')

function isAuth(req, res, next) {
    let user = req.body.usuario
    let pass = req.body.password
    u.Usuario.findOne({usuario: user, password: pass}, (err, user) => {
    if (err) {console.log(err) }
    if (user) { next() }
    else{res.render('login',{message:'Ingrese credenciales correctas'})}
    })
}

module.exports = isAuth