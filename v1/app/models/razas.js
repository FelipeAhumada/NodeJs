const mongoose = require('mongoose')

const razaSchema = new mongoose.Schema({nombreRaza : { type: String, required: true, unique: true }})


const Raza = mongoose.model('raza', razaSchema)