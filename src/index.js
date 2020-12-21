//Todo el codigo relacionado al servidor
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Initializations
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}));

app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({extends: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));


//Global Variables

//Routes

//Static Files

//Server is listenning
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
});





//https://youtu.be/-bI0diefasA?t=1650