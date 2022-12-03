const express = require('express')
const router = express.Router()

const razas = require('../controllers/razas')

//Route todas las razas
router.get('/', razas.getAllRazas);
//Route una raza por id
router.get('/:id', razas.getRazaById);
//Route crear una raza
router.post('/', razas.createRaza);
//Route actualizar una raza
router.put('/:id', razas.updateRaza);
//Route eliminar una raza
router.delete('/:id', razas.deleteRaza);


module.exports = router

