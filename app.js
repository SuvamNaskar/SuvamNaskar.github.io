const express = require('express');
const path = require('path');

const app = express();

const staticPath = path.join(__dirname, 'public');
const rootHtml = path.join(__dirname, 'index.html');
const mobileHtml = path.join(__dirname, 'mobile-index.html');

// Serve static files from /public
app.use(express.static(staticPath));

app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'] || '';
  const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

  if (isMobile) {
    res.sendFile(mobileHtml);
  } else {
    res.sendFile(rootHtml);
  }
});

// app.get('/m', (req, res) => {
//   const userAgent = req.headers['user-agent'] || '';
//   const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

//   if (isMobile) {
//     res.sendFile(mobileHtml);
//   } else {
//     res.redirect('/');
//   }
// });

app.use((req, res) => {
  res.status(404).send('Route not found.');
});

module.exports = app;