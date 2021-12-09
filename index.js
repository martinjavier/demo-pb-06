const express = require('express')
const path = require('path');
const Contenedor = require("./contenedor")
//const productos = new Contenedor("./productos.txt")
const Archivo =  require("./archivo")
const productos = new Archivo("./productos.txt")

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
    //res.sendFile(path.join(__dirname, '/productos.txt'));
    async function test(){
        return await unProductoRandom()
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
        const catalogo = await productos.getAll()
        console.log("TODOS")
        console.log(catalogo)
        return catalogo
    } catch (err) {
        console.log(err)
    }
}

async function soloUnProducto(id){
    try{
        const productoBuscado = await productos.getById(id) 
        return productoBuscado
    } catch (err) {
        console.log(err)
    }
}

async function unProductoRandom(){
    try{
        const min = 1
        const max = 6
        const id = Math.floor(Math.random() * (max - min) ) + min;
        const productoBuscado = await productos.getById(id) 
        return productoBuscado
    } catch (err) {
        console.log(err)
    }
}