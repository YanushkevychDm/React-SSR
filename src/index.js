const express = require('express');
const React = require('react');
const renderToStrng = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const app = express();

app.get('/', (req, res) => {
  const content = renderToStrng(<Home />);

  res.send(content);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});