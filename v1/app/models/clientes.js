const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
    rut : { type: String, required: true, unique: true },
    nombreCompleto : { type: String, required: true },
    direccion : { type: String, required: true },
    telefono : { type: String, required: true },
    mascotas : [{ nombre:{ type : String },
                  raza_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'users' , ref: 'raza' },
                  vacunas : [{ descripcion:{ type : String },
                               fecha:{ type : Date },
                  }]
    }],
    fechaVisitas : [{ fecha:{ type : Date }}]
})

const Cliente = mongoose.model('cliente', clienteSchema)