var express = require('express');
var router = express.Router();
const sendcontact = require('../../libs/claro/send-request');
const sendcontact2 = require('../../libs/claro/send-request2');
const dbcore = require('mariadb');
const sendmail = require('nodemailer');
const { sprintf } = require('sprintf-js');
var request = require("request");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});
router.post('/guardar', function (req, res, next) {
  var body = req.body;
  console.log('entro al guardar', body);
  res.status(200);
  sendcontact2.request(body, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos guardar contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos guardar contigo' + body);

});
router.get('/gracias', function (req, res, next) {
  res.render('gracias', { title: 'Gracias' });
});


router.post('/gracias', function (req, res, next) {
  res.render('gracias', { title: 'Gracias' });

});


router.get('/cartagena', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});

router.get('/bucaramanga', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});

router.get('/cucuta', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});

router.get('/tunja', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});

router.get('/ibague', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});

router.get('/armenia', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});

router.get('/pereira', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});

router.get('/manizales', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});

router.get('/santamarta', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});

router.get('/pasto', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});

router.get('/villavicencio', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});

router.get('/popayan', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});

router.get('/neiva', function (req, res, next) {
  res.render('index', { title: 'Testing html' });
});

router.post('/llamar', function (req, res) {
  var celular = req.body.numero;
  res.status(200);
  sendcontact.request(celular, (e, r, b) => {
    if (e) {
      console.log(e);
      return res.send('Pronto nos comunicaremos contigo');
    }
    if (b) {
      console.log(b);
    }
  });

  res.send('Pronto nos comunicaremos contigo' + celular);

});

module.exports = router;
