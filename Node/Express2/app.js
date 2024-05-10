var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var sqlite3 = require('sqlite3');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const {name} = require("pug");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var db = require('knex')({
    client:'sqlite3',
    connection:{
        filename: 'proyecto.sqlite'
    },
    useNullAsDefault:true // Establir el flag useNullAsDefault a true
});

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// JS2 1
// Sacar nombres de pjs de Mother 3
app.get('/api/mother', function (req, res){
    db.select('M3.name', 'M3.age', 'M3.gender', 'M3.role', 'M3.weapon', 'M3.hability')
        .from('Mother3CHR as M3')
        .then(function (data){
            result = {}
            result.m3 = data;
            res.json(result);
        }).catch(function (error){
        console.log(error)
    });
});

// Sacar nombres de pjs de Red Dead Redemption 2
app.get('/api/rdr', function (req, res){
    db.select('RDR.name', 'RDR.age', 'RDR.gender', 'RDR.va', 'RDR.role', 'RDR.weapon', 'RDR.hability')
        .from('RedDeadRedemptionCHR as RDR')
        .then(function (data){
            result = {}
            result.rdr = data;
            res.json(result);
        }).catch(function (error){
        console.log(error)
    });
});

// Sacar nombres de pjs de Kingdom Hearts
app.get('/api/kh', function (req, res){
    db.select('KH.id', 'KH.name', 'KH.age', 'KH.gender', 'KH.va', 'KH.role', 'KH.weapon')
        .from('KingdomHeartsCHR as KH')
        .then(function (data){
            result = {}
            result.kh = data;
            res.json(result);
        }).catch(function (error){
            console.log(error)
    });
});

app.get('/api/kh/:id', function (req, res){
    let id = parseInt(req.params.id);

    db.select('KH.id', 'KH.name', 'KH.age', 'KH.gender', 'KH.va', 'KH.role', 'KH.weapon')
        .from('KingdomHeartsCHR as KH')
        .then(function (data){
            res.json(data);
        }).catch(function (error){
        console.log(error)
    });
});

app.delete('/api/kh/:id', function (req, res){
    let id = parseInt(req.params.id);
    // Consulta para borrar
    db.delete()
        .from('KingdomHeartsCHR')
        .where('id', id)
        .then(function (data){
            res.json(data);
        }).catch(function (error){
        console.log(error)
    });
});

// Sacar los nombres de pjs del red, habilidades del mother 3, y armas del kingdom hearts
// Intente hacerlo con todo names, pero con el join me daba conflicto y me dio un poco perea, srry xD
app.get('/api/everyone', function (req, res){
    db.select('M3.id', 'M3.name', 'KH.id', 'KH.name', 'RDR.id', 'RDR.name')
        .from('KingdomHeartsCHR as KH')
        .rightJoin('RedDeadRedemptionCHR as RDR', 'KH.id', 'RDR.id')
        .leftJoin('Mother3CHR as M3', 'KH.id', 'M3.id')
        .then(function (data){
            res.json(data);
        });
});


// JS2


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
