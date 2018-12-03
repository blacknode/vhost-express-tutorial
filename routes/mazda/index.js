var express = require('express');
var router = express.Router();
const sendcontact = require('../../libs/mazda/send-request');
const dbcore = require('mariadb');
const { sprintf } = require('sprintf-js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'concesionariomazda.com.co' });
});

router.post('/', function (req, res, next) {
  
  res.send("");
});

router.get('/gracias', function (req, res, next) {
  res.render('gracias', { title: 'Gracias' });
});


router.post('/gracias', function(req, res, next){
  res.render('gracias', { title: 'Gracias' });

});

router.post('/index', function (req, res, next) {
  res.status(400);
  /**
   * Enviamos el número móvil al endpoint de Kerberus
   */
  
   sendcontact.request(req.body.mobile, (e, r, b)=> {
    if (e)
    {
      console.log(e);
      return res.render('index', { message: 'Gracias' }); //compila la vista en pug
    }
    if (b)
    {
      console.log(b);
    }
  })
  if (typeof req.body.name !== 'undefined') {
    const mariadb = dbcore.createConnection(
      {
        host: 'localhost',
        user: 'soldev_maz',
        password: 'RIJEVH9Kzh',
        port: 3306,
        database: 'soldev_maz' 
      }
    )
    }
  /**
   * El usuario siempre recibe confirmación, sin importar lo que suceda en el backend.
   */
  res.render('index', { message: 'Gracias' });
});
module.exports = router;
