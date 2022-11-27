const { Router, response } = require('express');
const router = Router();


//Obtengo todos los ramos
router.get('/getRamos', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Realizo la consulta
    client.execute('SELECT * FROM ramos', function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.json(result.rows);
        }
    });
})

//Obtengo un ramo por su id
router.get('/getRamo/:id', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Obtengo el id del ramo
    const id = req.params.id;
    //Realizo la consulta
    client.execute('SELECT * FROM ramos WHERE id = ?', [id], function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.json(result.rows);
        }
    });
})

//Obtengo un ramo por su nombre
router.get('/getRamoNombre/:nombre', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Obtengo el id del ramo
    const nombre = req.params.nombre;
    //Realizo la consulta
    client.execute('SELECT * FROM ramos WHERE nombre = ?', [nombre], function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.json(result.rows);
        }
    });
})

//Creacion de un ramo
router.post('/crearRamo', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Obtengo los datos del ramo
    const { id, sigla, nombre, semestre, prerequisito } = req.body;
    //Realizo la consulta
    client.execute('INSERT INTO ramos (id, sigla, nombre, semestre, prerequisito) VALUES (?, ?, ?, ?, ?)', [id, sigla, nombre, semestre, prerequisito], function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.json(result.rows);
        }
    });
})

//Actualizacion de un ramo
router.put('/actualizarRamo', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Obtengo los datos del ramo
    const { id, sigla, nombre, semestre } = req.body;
    //Realizo la consulta
    client.execute('UPDATE ramos SET sigla = ?, nombre = ?, semestre = ? WHERE id = ?', [sigla, nombre, semestre, id], function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.json(result.rows);
        }
    });
})

//Eliminacion de un ramo
router.delete('/eliminarRamo/:id', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Obtengo el id del ramo
    const id = req.params.id;
    //Realizo la consulta
    client.execute('DELETE FROM ramos WHERE id = ?', [id], function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.json(result.rows);
        }
    });
})


module.exports = router;