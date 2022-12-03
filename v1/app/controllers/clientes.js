const { httpError } = require('../helpers/handleError')
const clientesModel = require('../models/clientes')

//obtengo todos los clientes
const getAllClientes = async (req, res, next) => {
    try {
        const clientes = await clientesModel.find()
        res.status(200).json(clientes)
    } catch (error) {
        next(error)
    }
}

//obtengo un cliente por id
const getClienteById = async (req, res, next) => {
    try {
        const { id } = req.params
        const cliente = await clientesModel.findById({_id : id})
        if(!cliente) {
            throw httpError(404, 'Cliente no encontrado')
        }
        res.status(200).json(cliente)
    } catch (error) {
        next(error)
    }
}

//creo un cliente
const createCliente = async (req, res, next) => {
    try {
        const { rut, nombreCompleto, direccion, telefono, mascotas, fechaVisitas } = req.body
        const cliente = await clientesModel.create({rut, nombreCompleto, direccion, telefono, mascotas, fechaVisitas})
        res.status(201).json(cliente)
    } catch (error) {
        next(error)
    }
}

//actualizo un cliente
const updateCliente = async (req, res, next) => {
    try {
        const { id } = req.params
        const { rut, nombreCompleto, direccion, telefono, mascotas, fechaVisitas } = req.body
        const cliente = await clientesModel.findByIdAndUpdate(id, {rut, nombreCompleto, direccion, telefono, mascotas, fechaVisitas}, {new : true})
        if(!cliente) {
            throw httpError(404, 'Cliente no encontrado')
        }
        res.status(200).json(cliente)
    } catch (error) {
        next(error)
    }
}

//elimino un cliente
const deleteCliente = async (req, res, next) => {
    try {
        const { id } = req.params
        const cliente = await clientesModel.findById({_id : id})
        if(!cliente) {
            throw httpError(404, 'Cliente no encontrado')
        }
        await cliente.remove()
        res.status(200).json(cliente)
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllClientes, getClienteById, createCliente, updateCliente, deleteCliente }

