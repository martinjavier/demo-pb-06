const express = require('express')
const path = require('path');
const Contenedor = require("./contenedor.js")

const app = express()

const PORT = process.env.PORT || 8080

// Main Route
app.get('/', (req, res) => {
    res.send('<h1 style="color: blue;">Bienvenidos al servidor express</h1>')
})

// Productos Route
app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, './productos.txt'));    

})

// ProductosRandom Route
app.get('/productosRandom', (req, res) => {
    //res.send(todosLosProductos())
    //res.sendFile(path.join(__dirname, '/productos.txt'));
    async function test(){
        await todosLosProductos()
    }
    res.send(test())
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

async function todosLosProductos(){
    try {
        const productos = new Contenedor("./productos.txt")
        const catalogo = await productos.getAll()
        return catalogo
    } catch (err) {
        console.log(err)
    }
}