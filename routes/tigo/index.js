var express = require('express');
var router = express.Router();
const sendcontact = require('../../libs/tigo/send-request');
const dbcore = require('mariadb');
const sendmail = require('nodemailer');
const { sprintf } = require('sprintf-js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home_julio_agosto', { title: 'Tigo UNE – Triple Play Hogar➤ Tigo UNE Triple Play Hogar' });
});

router.post('/', function (req, res, next) {
  res.status();
  res.send("");
});

router.get('/gracias', function (req, res, next) {
  res.render('gracias', { title: 'Gracias' });
});


router.post('/gracias', function (req, res, next) {
  res.render('gracias', { title: 'Gracias' });

});

router.get('/oferta-display', function (req, res, next) {
  res.render('oferta-display', { title: 'Tigo UNE; Triple Play Hogaroferta display - Tigo UNE - Triple Play' });
});

router.post('/', function (req, res, next) {
  res.status();
  res.send("");
});

router.get('/oferta-mail', function (req, res, next) {
  res.render('oferta-mail', { title: 'Tigo UNE; Triple Play HogarOferta Mail - Tigo UNE - Triple Play Hogar' });
});

router.post('/', function (req, res, next) {
  res.status();
  res.send("");
});

router.get('/oferta-sms', function (req, res, next) {
  res.render('oferta-sms', { title: 'Tigo UNE; Triple Play Hogaroferta sms - Tigo UNE - Triple Play Hogar' });
});

router.post('/', function (req, res, next) {
  res.status();
  res.send("");
});

router.get('/bing-oferta', function (req, res, next) {
  res.render('bing-oferta', { title: 'Tigo UNE; Triple Play HogarBing Oferta - Tigo UNE - Triple Play Hogar' });
});

router.post('/', function (req, res, next) {
  res.status();
  res.send("");
});

router.get('/moviles', function (req, res, next) {
  res.render('moviles', { title: 'Tigo UNE - Triple Play Hogarmoviles - Tigo UNE - Triple Play Hogar' });
});

router.post('/', function (req, res, next) {
  res.status();
  res.send("");
});

router.get('/portabilidad', function (req, res, next) {
  res.render('portabilidad', { title: 'Tigo UNE - Triple Play Hogarportabilidad - Tigo UNE - Triple Play Hogar' });
});

router.post('/', function (req, res, next) {
  res.status();
  res.send("");
});

router.get('/callme', function (req, res, next) {
  res.status(400);
  res.send("Bad Request");
});


router.post('/callme', function (req, res, next) {
  res.status(200);


  /**
   * Enviamos el número móvil al endpoint de Kerberus
   */


});
module.exports = router;
