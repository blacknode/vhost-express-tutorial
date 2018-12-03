var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var vhost = require("vhost");
var app = express();
/**
 * Sites 
 */
var claro = express();
var mazda = express();
var tigo = express();
var etb = express();

app.use(vhost("claro.testing", claro));
app.use(vhost("mazda.testing", mazda));
app.use(vhost("tigo.testing", tigo));
app.use(vhost("etb.testing", etb));

/**
 * Claro
 */
claro.use(logger("dev"));
claro.use(express.json());
claro.use(express.urlencoded({ extended: false }));
claro.use(cookieParser());
claro.use(express.static(path.join(__dirname, "html/claro")));
claro.set('view engine', 'pug');
claro.set('views',  path.join(__dirname, 'views/claro'));

/**
 * Routes
 */
var indexClaro = require('./routes/claro/index');
claro.use('/', indexClaro);
/**
 * Mazda
 */
mazda.use(logger("dev"));
mazda.use(express.json());
mazda.use(express.urlencoded({ extended: false }));
mazda.use(cookieParser());
mazda.use(express.static(path.join(__dirname, "html/mazda")));
mazda.set('view engine', 'pug');
mazda.set('views',  path.join(__dirname, 'views/mazda'));


/**
 * Routes
 */
var indexMazda = require('./routes/mazda/index');
mazda.use('/', indexMazda);



/**
 * Tigo
 */
tigo.use(logger("dev"));
tigo.use(express.json());
tigo.use(express.urlencoded({ extended: false }));
tigo.use(cookieParser());
tigo.use(express.static(path.join(__dirname, "html/tigo")));
tigo.set('view engine', 'pug');
tigo.set('views',  path.join(__dirname, 'views/tigo'));


/**
 * Routes
 */
var indexTigo = require('./routes/tigo/index');
tigo.use('/', indexTigo);

/**
 * Etb
 */
etb.use(logger("dev"));
etb.use(express.json());
etb.use(express.urlencoded({ extended: false }));
etb.use(cookieParser());
etb.use(express.static(path.join(__dirname, "html/etb")));
etb.set('view engine', 'pug');
etb.set('views',  path.join(__dirname, 'views/etb'));


/**
 * Routes
 */
var indexEtb = require('./routes/etb/index');
etb.use('/', indexEtb);

module.exports = app;
