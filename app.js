var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require('helmet');
var vhost = require("vhost");
var compression = require('compression')
var sassMiddleware = require('node-sass-middleware')

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
claro.set('view engine', 'html');
claro.set('views', path.join(__dirname, 'views/claro'));
claro.use(helmet());
claro.use(logger("dev"));
claro.use(compression());
claro.use(express.json());
claro.use(express.urlencoded({ extended: false }));
claro.use(cookieParser());
claro.engine('html', require('ejs').renderFile);
claro.use(express.static(path.join(__dirname, "html/claro")));

/**
 * Routes
 */
var indexClaro = require('./routes/claro/index');
claro.use('/', indexClaro);



/**
 * Mazda
 */
mazda.set('view engine', 'pug');
mazda.set('views', path.join(__dirname, 'views/mazda'));
mazda.use(compression());
mazda.use(helmet());
mazda.use(logger("dev"));
mazda.use(express.json());
mazda.use(express.urlencoded({ extended: false }));
mazda.use(cookieParser());
mazda.use(express.static(path.join(__dirname, "html/mazda")));
mazda.use(sassMiddleware({
  src: path.join(__dirname, 'sass/mazda'),
  dest: path.join(__dirname, 'html/mazda/stylesheets'),
  indentedSyntax: false,
  sourceMap: false,
  outputStyle: "compressed",
  force: true,
  prefix: '/stylesheets',
}));

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
tigo.set('views', path.join(__dirname, 'views/tigo'));


/**
 * Routes
 */
var indexTigo = require('./routes/tigo/index');
tigo.use('/', indexTigo);




/**
 * Etb
 */
etb.use(compression());
etb.use(helmet());
etb.use(logger("dev"));
etb.use(express.json());
etb.use(express.urlencoded({ extended: false }));
etb.use(cookieParser());
etb.use(express.static(path.join(__dirname, "html/etb")));
etb.set('view engine', 'pug');
etb.set('views', path.join(__dirname, 'views/etb'));
etb.use(sassMiddleware({
  src: path.join(__dirname, 'sass/etb'),
  dest: path.join(__dirname, 'html/etb/stylesheets'),
  indentedSyntax: false,
  sourceMap: false,
  outputStyle: "compressed",
  force: true,
  prefix: '/stylesheets',
}));

/**
 * Routes
 */
var indexEtb = require('./routes/etb/index');
etb.use('/', indexEtb);

module.exports = app;
