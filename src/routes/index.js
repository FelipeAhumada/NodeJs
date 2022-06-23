const { Router } = require('express');
const router = Router();



// '/' Ruta definidia como inicial
router.get('/', (req, res) => {
    res.json('Hello World Alumons IPP');
});


module.exports = router;