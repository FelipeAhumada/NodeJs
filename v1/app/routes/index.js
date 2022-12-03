const express = require('express')
const router = express.Router()

//Route to razas
router.use('/razas', require('./razas'))
//Route to clientes
router.use('/clientes', require('./clientes'))


module.exports = router