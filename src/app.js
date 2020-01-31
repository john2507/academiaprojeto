const express = require('express');
//const routes = express.Router();
const bodyParser = require ('body-parser');
const app = express();
//const indexa = require('./src/routes/index');
const controllerApi = require('./controllers/controllerApi')



app.set('json spaces',4)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// rotas 
//app.use('/', index);
app.get('/api/curriculo/', controllerApi);


const PORT = process.env.PORT || 3333
app.listen(PORT, ()=>{
    console.log('Servidor Rodando na port: 3333');
});

