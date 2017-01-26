const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  const options = {
    root: './views/'
  }
  res.sendFile('index.html', options);
});

router.get('/jade', function(req, res) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
