const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

// Middleware to detect device type
app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'];

  const isMobileOrTablet = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

  if (isMobileOrTablet) {
    res.redirect('/m');
  } else {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

app.get('/m', (req, res) => {
  const userAgent = req.headers['user-agent'];

  const isMobileOrTablet = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

  if (isMobileOrTablet) {
    res.sendFile(path.join(__dirname, 'mobile-index.html'));
  } else {
    res.redirect('/');
  }
});

module.exports = app;