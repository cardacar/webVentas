const express = require('express')
const app = express()

app.get('*', (request, response)=>{
    response.send({ message : 'Hello World'})
})

app.listen(3000, ()=> console.log('Servidor corriendo en el puerto 3000'))