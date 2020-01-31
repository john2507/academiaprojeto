const express = require('express');
const routes = express.Router();



    routes.get('/', (req, res) => {
        res.send('Pagina Inicial');
    });


module.exports = routes