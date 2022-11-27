const express = require("express");
const app = express();
const morgan = require("morgan");
var cassandra = require('cassandra-driver');
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


// Realizamos la conexión a la base de datos cassandra

// Remplazamos 'Username' and 'Password' con los username y password de tu cluster
let authProvider = new cassandra.auth.PlainTextAuthProvider('Username', 'Password');
// Remplazamos 'ClusterIP' con la IP de tu cluster
let contactPoints = ['PublicIP1','PublicIP2','PublicIP3'];
// Remplazamos el datacenter con el nombre de tu datacenter ejemplo si estas en la nuve seria algo como aws-us-east-1
let localDataCenter = 'DataCenter';
//Conecta a la base de datos con las variables indicadas.
let client = new cassandra.Client({contactPoints: contactPoints, authProvider: authProvider, localDataCenter: localDataCenter, keyspace:'grocery'});



//Routes del servidor 
app.use(require('./routes/index'))
//Llamamos a los ramos
app.use(require('./routes/ramos.js'))




//Inicio del servidor
app.listen(app.get('port'), ()=>{
    console.log(`Server port ${app.get('port')}`);
});