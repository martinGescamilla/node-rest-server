require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('get Usuario')
})
app.post('/usuario', function(req, res) {

    let bodyInterno = req.body;

    if (bodyInterno.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'

        });
    } else {
        res.json({
            persona: bodyInterno
        })
    }



})
app.put('/usuario/:id', function(req, res) {
    let idInterno = req.params.id;

    res.json({
        idInterno
    })
})
app.delete('/usuario', function(req, res) {
    res.json('delete Usuario')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})