const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
//parsing middlewares
//parse application---////

app.use(bodyParser.urlencoded({extended: false}));

//parse application/json data//
app.use(bodyParser.json());

app.use(express.static('public'));
//Templating engine
//app.engine('hbs', exphbs({extname: '.hbs'}));

//app.set('view engine','hbs');
const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

//Router
app.get('', (req,res) => {
   res.render('home');
});
app.listen(port, ()=> console.log(`Listining on port ${port}`));
