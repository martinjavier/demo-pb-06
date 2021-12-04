const express = require('express')
const path = require('path');

const app = express()

const PORT = process.env.PORT || 8080

let visitas = 0

// Main Route
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/index.html'));
    res.send('<h1 style="color: blue;">Bienvenidos al servidor express</h1>')
})

// Visits Route
app.get('/visitas', (req, res) => {
    visitas += 1
    res.send(`La cantidad de visitas es ${visitas}`)
})

// Fecha y Hora Route
app.get('/fyh', (req, res) => {
    const actualDate = new Date().toLocaleString()
    res.send({fyh: actualDate})
})

const connectedServer = app.listen(PORT, () => {
    console.log(`Servidor activo y escuchando en el puerto: ${PORT}`)
})

connectedServer.on('error', (error) => {
    console.log(error.message)
})

