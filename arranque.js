const Contenedor =  require("./contenedor.js")

async function testNewFile(){
    console.log(`***Test archivo nuevo***`)
    try {
        const productos = new Contenedor("./productos.txt")
    
        //agrego un producto
        const producto1 = {title: "Escuadra", price: 323.45, thumbnail: "./escuadra.png"}
        const idProducto1 = await productos.save(producto1)
        console.log(`Id del producto 1 es: ${idProducto1}`)
        //agrego otro producto
        const producto2 = {title: "Calculadora", price: 234.56, thumbnail: "./calculadora.png"}
        const idProducto2 = await productos.save(producto2)
        console.log(`Id del producto 2 es: ${idProducto2}`)
        //agrego otro producto
        const producto3 = {title: "Globo Terráqueo", price: 45.67, thumbnail: "./globoterraqueo.png"}
        const idProducto3 = await productos.save(producto3)
        console.log(`Id del producto 3 es: ${idProducto3}`)
        //agrego otro producto
        const producto4 = {title: "Paleta Pintura", price: 456.78, thumbnail: "./paletapintura.png"}
        const idProducto4 = await productos.save(producto4)
        console.log(`Id del producto 4 es: ${idProducto4}`)
        //agrego otro producto
        const producto5 = {title: "Reloj Reloj Reloj", price: 67.89, thumbnail: "./reloj.png"}
        const idProducto5 = await productos.save(producto5)
        console.log(`Id del producto 5 es: ${idProducto5}`)
        //agrego otro producto
        const producto6 = {title: "Agenda Agenda", price: 78.90, thumbnail: "./agenda.png"}
        const idProducto6 = await productos.save(producto6)
        console.log(`Id del producto 6 es: ${idProducto6}`)

        //el archivo tiene seis productos
        const catalogo = await productos.getAll()
        console.log("Muestro catálogo:")
        console.log(catalogo)
        for(let i=1;i<7;i++){
            const productoBuscado = await productos.getById(i) 
            console.log("Producto ID="+i,productoBuscado)
        }
        //obtengo el producto de id 40
        const productoInexistente = await productos.getById(40)
        console.log("Producto ID=40 ",productoInexistente)
        
        // borro archivo
        await productos.deleteAll()
        console.log("Archivo resetado")
    } catch (err) {
        console.log(err)
    }
}
async function testExistingFile() {
    console.log(`***Test archivo existente***`)
    
    try {

        const productos = new Contenedor("./productosExistentes.txt")

        //el archivo tiene dos productos
        let catalogo = await productos.getAll()
        console.log("Muestro catálogo:")
        console.log(catalogo)

        //agrego un producto
        const producto7 = {title: "Lapicera", price: 23.4, thumbnail: "./lapicera.png"}
        const idProducto7 = await productos.save(producto7)
        console.log(`Id del producto 7 es: ${idProducto7}`)

        //el archivo tiene tres productos
        catalogo = await productos.getAll()
        console.log("Muestro catálogo:")
        console.log(catalogo)

        //borro producto Id 7:
        await productos.deleteById(7)
        console.log("Producto 7 eliminado")
    } catch (err){
        console.log(err)
    }
}
async function test(){
    await testNewFile()
    testExistingFile()
}
test()