//C:\Windows\System32>taskkill /F /IM node.exe
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var applicationRouter = require('./routes/guardapplication');
var cors = require('cors');
var mongoose = require('mongoose');
const bodyParser = require("body-parser")


const uri = "mongodb+srv://Seahawk:anilrathore@seahawkdelhi.zalcj.mongodb.net/SeahawkGuard?retryWrites=true&w=majority";
mongoose.connect(uri, {
  promiseLibrary: require('bluebird'),
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => console.log('connection successful'))
  .catch((err) => console.error(err));


var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }))
// support parsing of application/json type post data
app.use(bodyParser.json());

app.set("view engine", "ejs");

//support parsing of application/x-www-form-urlencoded post data
//app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', applicationRouter);


module.exports = app;


