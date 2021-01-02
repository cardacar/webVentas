//Todo el codigo relacionado al servidor
const express = require('express');
const path = require('path');
const morgan = require('morgan');



//Initializations
const app = express();

//settings
app.set('port', process.env.PORT || 4000);




//Middlewares
app.use(morgan('dev'));



//Global Variables

//Routes
app.get('/',(req, res) =>{
    res.sendFile(path.resolve(__dirname, '../src/views/index.html'));
});

app.get('/products',(req, res) =>{
    res.sendFile(path.resolve(__dirname, '../src/views/products.html'));
});

app.get('/login',(req, res) =>{
    res.sendFile(path.resolve(__dirname, '../src/views/login.html'));
});







//Static Files
app.use(express.static('src'));
//app.use(express.static('src/views'));
app.use(express.static('src/public'));


//Server is listenning
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
});
