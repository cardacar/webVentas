//Todo el codigo relacionado al servidor

const express = require('express');
//Initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//Middlewares

//Global Variables

//Routes

//Static Files

//Server is listenning
app.listen(app.get('port', ()=>{
    console.log('El servidor se inicio en el puerto', app.get('port'));
}));