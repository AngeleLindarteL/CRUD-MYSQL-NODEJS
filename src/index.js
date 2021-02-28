const express = require('express');
const mysql = require('mysql')
const ejs = require('ejs')
const myConnection = require('express-myconnection')
const morgan = require('morgan');
const path = require('path');

const app = express();

//importing routes

const customerRoutes = require('./routes/customer.js');
const { urlencoded } = require('express');

// Settings

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host : 'localhost',
    user : 'root',
    port : 3306,
    database : 'crud_mysql'
}, 'single'));

app.use(express.urlencoded({extended : false}))

// Routes

app.use('/', customerRoutes)

// Static Files

app.use(express.static(path.join(__dirname, 'public')));

// Starting Server

app.listen(app.get('port'), () => { console.log(`server on port 3000`)});