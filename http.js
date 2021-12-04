const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/'){
        res.end('Hola')
    } else {
        res.end(`
        <h1 style="font-size: 64px">Oh! oh!</h1>
        <p style="font-size: 50px">La pagina que buscas no existe</p>
        `)
    }
    res.end()    
})

const PORT = 8000

const connectedServer = server.listen(PORT, () => {
    console.log(`Servidor activo y escuchando en el puerto: ${connectedServer.address().port}`)
})

