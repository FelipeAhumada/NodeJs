const { Router, response } = require('express');
const router = Router();

//Obtengo todos los alumnos

router.get('/getAlumnos', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Realizo la consulta
    client.execute('SELECT * FROM alumnos', function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.json(result.rows);
        }
    });
})

//Obtengo un alumno por su id
router.get('/getAlumno/:id', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Obtengo el id del alumno
    const id = req.params.id;
    //Realizo la consulta
    client.execute('SELECT * FROM alumnos WHERE id = ?', [id], function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.json(result.rows);
        }
    });
})

//Obtengo un alumno por su nombre
router.get('/getAlumnoNombre/:nombre', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Obtengo el id del alumno
    const nombre = req.params.nombre;
    //Realizo la consulta
    client.execute('SELECT * FROM alumnos WHERE nombre = ?', [nombre], function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.json(result.rows);
        }
    });
})

//Obtengo un alumno por su Rut
router.get('/getAlumnoRut/:rut', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Obtengo el id del alumno
    const rut = req.params.rut;
    //Realizo la consulta
    client.execute('SELECT * FROM alumnos WHERE rut = ?', [rut], function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.json(result.rows);
        }
    });
})

//Creacion de un alumno
router.post('/crearAlumno', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Obtengo los datos del alumno
    const { id, nombre, rut, edad, carrera } = req.body;
    //Realizo la consulta
    client.execute('INSERT INTO alumnos (id, nombre, rut, edad, carrera) VALUES (?, ?, ?, ?, ?)', [id, nombre, rut, edad, carrera], function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})

//Actualizacion de un alumno
router.put('/actualizarAlumno/:id', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Obtengo el id del alumno
    const id = req.params.id;
    //Obtengo los datos del alumno
    const { nombre, rut, edad, carrera } = req.body;
    //Realizo la consulta
    client.execute('UPDATE alumnos SET nombre = ?, rut = ?, edad = ?, carrera = ? WHERE id = ?', [nombre, rut, edad, carrera, id], function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})

//Eliminacion de un alumno
router.delete('/eliminarAlumno/:id', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Obtengo el id del alumno
    const id = req.params.id;
    //Realizo la consulta
    client.execute('DELETE FROM alumnos WHERE id = ?', [id], function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})

module.exports = router;
