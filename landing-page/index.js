const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const producto = require('./models/product')
const isAuth = require('./middlewares/isAuth')
const usuario = require('./models/user')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine','jade')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/table', isAuth , (req, res) => {
    res.render('table')
})

app.post('/login',isAuth, producto.show)
app.post('/usuario/create', usuario.create)

//productos
app.get('/productos', producto.show)
app.get('/producto/nuevo', (req, res) => {
    res.render('create_product')
})
app.post('/producto/storage', producto.storage)
app.post('/producto/update', producto.update)
app.get('/producto/edit/:_id', producto.edit)
app.get('/producto/delete/:_id', producto.delete)

app.listen(3000, () => {
    console.log(`Escuchando la aplicación desde el puerto 3000`)
})