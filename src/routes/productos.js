const { Router, response } = require('express');
const router = Router();

const productos= require('../data.json');

//console.log(productos);


//Visualizo la ruta de mi url = endpoint
router.get('/getProductos', (req, res) => {
    res.json(productos);
});


//Recibimos parametros de productos 
 router.get('/getProducto/:codigo', (req, res) =>{
    //Cambianos el tipo de dato.DEsde el parametro que recibimos en el request
    const codigo = Number(req.params.codigo);
    console.log(codigo);
    //Buscamos el codigo dentro del json
    const producto = productos.find(producto => producto.codigo === codigo);
    console.log(producto);
    //Validamos si no encuentra el codigo
    if (producto){
        res.json(producto);
    }else{
        //Controlamos el error con un status HTTP
        res.status(404).end();
    }
    
 });


module.exports = router;