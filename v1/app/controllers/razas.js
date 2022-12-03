const { httpError } = require('../helpers/handleError')
const codeModel = require('../models/razas') 

//obtengo todas las razas
const getAllRazas = async (req, res, next) => {
    try {
        const razas = await codeModel.find()
        res.status(200).json(razas)
    } catch (error) {
        next(error)
    }
}

//obtengo una raza por id
const getRazaById = async (req, res, next) => {
    try {
        const { id } = req.params
        const raza = await codeModel.findById({_id : id})
        if(!raza) {
            throw httpError(404, 'Raza no encontrada')
        }
        res.status(200).json(raza)
    } catch (error) {
        next(error)
    }
}

//creo una raza
const createRaza = async (req, res, next) => {
    try {
        const { nombreRaza } = req.body
        const raza = await codeModel.create({nombreRaza})
        res.status(201).json(raza)
    } catch (error) {
        next(error)
    }
}

//actualizo una raza
const updateRaza = async (req, res, next) => {
    try {
        const { id } = req.params
        const { nombreRaza } = req.body
        const raza = await codeModel.findByIdAndUpdate(id, {nombreRaza}, {new : true})
        if(!raza) {
            throw httpError(404, 'Raza no encontrada')
        }
        res.status(200).json(raza)
    } catch (error) {
        next(error)
    }
}

//elimino una raza
const deleteRaza = async (req, res, next) => {
    try {
        const { id } = req.params
        const raza = await codeModel.findById({_id : id})
        if(!raza) {
            throw httpError(404, 'Raza no encontrada')
        }
        res.status(200).json(raza)
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllRazas, getRazaById, createRaza , updateRaza, deleteRaza }
