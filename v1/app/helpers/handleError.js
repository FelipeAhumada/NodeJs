const httpError = (res, err) => {
    console.log(err)
    res.status(500)
    res.send({ error: 'Error al realizar la solicitud'})
}

module.exports = { httpError }