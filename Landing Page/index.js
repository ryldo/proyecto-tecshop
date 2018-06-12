const express = require('express')
const app = express()

app.use(express.static('public'))

//middlewares:
/*  app.use((req, res, next) => {
    res.sendStatus(404).send('Esto no existe !')
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.sendStatus(500).send('Algo salió mal.')
}) */ 

app.get('/', (req, res) => {
    res.send('Primer hola desde express')
})

app.post('/', (req, res) => {
    res.send('Llamada post desde la misma url')
})

app.put('/user', (req, res) => {
    res.send('Recibimos un PUT desde /user')
})

app.delete('/user', (req, res) => {
    res.send('Recibimos un delete desde /user')
})

app.listen(3000, () => {
    console.log(`Escuchando la aplicación desde el puerto 3000`)
})