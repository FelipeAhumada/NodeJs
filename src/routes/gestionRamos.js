const { Router, response } = require('express');
const router = Router();

//Tengo los ramos reprobados del alumno ,de la tabla malla la cual tiene relación con alumnos ramos y notas
router.post('/inscribirRamo', (req, res) => {
    //Obtengo el cliente de la conexion
    const client = req.app.locals.client;
    //Obtengo los ramos del alumno por el rut
    const {sigla,rut, semestreTomaRamo } = req.data;
    //Se en que semestre estoy segun el año y el mes actual, si es mayor o igual que el mes de julio es el segundo semestre en caso contrario es 1 semestre
    var fecha = new Date();
    var mes = fecha.getMonth() +1;
    var anio = fecha.getFullYear();
    var semestre = (cMonth > 6) ? "2":"1";
    //Realizo la consulta
    client.execute('SELECT * FROM mallaAlumno where semestre = ? ,  rutAlumno = ? , prerequisitos = true', [semestre, rut], function (err, result) {
        if (err) {
            res.status(404).end();
        } else {
            res.json(result.rows);
        }
    });
    //TODO: uds terminen las reglas de negocio.
    //1. El estudiante ha aprobado todas las asignaturas que son prerrequisito de la asignatura a inscribir. 
    // 2. El estudiante no ha aprobado la asignatura que intenta inscribir. 
    //3. Existe cupo para incorporar al estudiante en algún curso de la asignatura que desea inscribir. 
    //4. El estudiante ha reprobado una única vez la asignatura que desea inscribir. 



})


