const http = require('http')

const server = http.createServer((req, res) => {
    const actualTime = new Date().getHours()

    if (actualTime >= 6 && actualTime <= 12){
        res.end('Buenos Días')
    }
    else if (actualTime >= 13 && actualTime <= 19){
        res.end('Buenas Tardes')
    }
    else {
        res.end('Hola Todos')
    }    
    
})

const PORT = 8000

const connectedServer = server.listen(PORT, () => {
    console.log(`Servidor activo y escuchando en el puerto: ${connectedServer.address().port}`)
})

