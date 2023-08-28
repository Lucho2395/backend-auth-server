const express   = require('express');
const bodyParse = require('body-parser');
require('dotenv').config(); //INICIALIZA TODA CONFIGURACION POR DEFECTO



const app = express();

//body-parser
app.use( bodyParse.urlencoded ({ extended: true }) );

//Ruta
app.use('/', require('./routes/auth'));

app.listen( process.env.PORT || 3000, () => {
    const port = process.env.PORT || 3000;
    console.log(`Servidor corriendo en el puerto ${ port }`);
});