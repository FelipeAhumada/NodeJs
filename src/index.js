const express = require("express");
const app = express();
const morgan = require("morgan");

//Configuracion del servidor , variables globales. process.env.port == Si existe algun puerto definido este lo tomará en caso contrario
//SErá el puerto 3000
app.set('port', process.env.port || 3000);
//Formatear objetos del tipo json
app.set('json spaces', 2);



//Middlewares
app.use(morgan('dev'));
//Datos de utilidad
//app.use(morgan('combined'));
//Acá para poder incorporar parametros y recibirlos desde nuestra app
app.use(express.urlencoded({extend: 'false'}));
//Para poder utilizar formatos del tipo json llamamos la librería-
app.use(express.json());




//Routes del servidor 
app.use(require('./routes/index'))
app.use(require('./routes/productos'))



//Inicio del servidor
app.listen(app.get('port'), ()=>{
    console.log(`Server port ${app.get('port')}`);
});