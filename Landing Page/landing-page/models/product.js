var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

var product_schema = new Schema({
    nombre: String,
    descripcion: String,
    precio: String
})

const Producto = mongoose.model('producto',product_schema,'producto')

module.exports = {
    show: (req, res) => {
        if (req.body._id == null) {
            Producto.find({}, (err, productos)=>{
              if(err){console.log(err)}
              else{res.render('table',{data : productos})}
            })
        }
        else{
            Producto.find({_id : req.body._id}, (err, producto)=>{
              if(err){console.log(err)}
              else{res.render('table', {data: producto})}
            }) 
        } 
    },
    storage: (req, res ) => {
        let producto = new Producto()
        producto.nombre = req.body.nombre,
        producto.descripcion = req.body.descripcion,
        producto.precio = req.body.precio
        producto.save((err, data)=>{
            Producto.find({}, (err, productos)=>{
                if(err){console.log(err)}
                else{
                    res.status(200)
                    res.redirect('/productos')
                }
              })
        })   
    },
    edit: (req, res) => {
        let id = req.params._id
        Producto.findById(id, (err , data) => {
            if(err) console.log(err)
            res.render('edit_product', {producto: data})
        })
    },
    update: (req, res) => {
        let id = req.body._id 
        let nuevo = {
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            precio: req.body.precio
        }
        Producto.findByIdAndUpdate(id, nuevo, (err, data) => {
            if(err){console.log(err)}
            Producto.find({}, (err, productos)=>{
                if(err){console.log(err)}
                else{
                    res.status(200)
                    res.redirect('/productos')}
              })
        })
    },
    delete: (req, res) => {
        Producto.findOne({_id: req.params._id}, (err, producto) => {
        producto.remove((err) => {
        res.send('EL producto se ha eliminado correctamente.')
        })
      })
    }
  
}