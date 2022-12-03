const express = require('express')
const router = express.Router()

const clientes = require('../controllers/clientes')


//Route todos los clientes
router.get('/', clientes.getAllClientes);
//Route un cliente por id
router.get('/:id', clientes.getClienteById);
//Route crear un cliente
router.post('/', clientes.createCliente);
//Route actualizar un cliente
router.put('/:id', clientes.updateCliente);
//Route eliminar un cliente
router.delete('/:id', clientes.deleteCliente);


module.exports = router