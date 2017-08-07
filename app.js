const express = require('express');
const exphbrs = require('express-handlebars');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

//create express app
const app = express();

//tell express to use handlebars
app.engine('handlebars', exphbrs({ defaultLayout: 'main'}));
app.set('views', './views');
app.set('view engine', 'handlebars');

//tell express to use body-parser middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//use routes
app.use('/', routes);

mongoose.connect('mongodb://localhost:27017/golf_club_inventory', { useMongoClient: true })
.then(() => app.listen(3000, () => console.log('ready to roll!!')));
