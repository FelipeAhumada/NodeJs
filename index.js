require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { dbConnect } = require('./config/mongo')

//Nos conectamos por el puerto de la variable de entorno
const PORT = process.env.PORT || 30001
// package que nos ayuda a controlar problemas de HEAD para llamadas a la API
app.use(cors())
//Para poder recibir y enviar datos en formato JSON
app.use(express.json())
// Para peticiones GET poder invocar a las RUTAS de la API , en este caso la ruta es "http://localhost/api/v1.0/"
app.use('api/v1.0/', require('./app/routes'))
// Nos conectamos a la base de datos
dbConnect()
// Nos conectamos al puerto de la variable de entorno
app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
})
