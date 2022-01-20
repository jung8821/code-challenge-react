const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const quotesRouter = require('./routes/quotes');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', es6Renderer);
app.set('views',__dirname +'/public/views');
app.set('view engine', 'html');


app.use('/quotes', quotesRouter);


app.listen(8080,() => console.log(`Application started on port 8080, Go to http://localhost:8080`));

module.exports = app;
