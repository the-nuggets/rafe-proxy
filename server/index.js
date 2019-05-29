const express = require('express');
const path = require('path');
const app = express();
const PORT = 1111;

app.use(express.static(path.join(__dirname, '../public')))

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/restaurants/:id/info', (req, res) => {
  res.redirect(`http://127.0.0.1:3002/api/restaurants/${req.params.id}/info`);
});

app.get('/restaurants/:id/reviews', (req, res) => {
  res.redirect(`http://127.0.0.1:3001/api/restaurants/${req.params.id}/reviews`);
});

app.get('/restaurants/:id/photos', (req, res) => {
  res.redirect(`http://127.0.0.1:3000/api/restaurants/${req.params.id}/photos`);
});

app.listen(PORT, () => console.log(`Proxy server listening on port ${PORT}!`));
