import express from 'express';
const path = require('path');

import render from './render';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(process.cwd(), 'public')));

app.set('views', path.resolve(process.cwd(), 'public'));

app.set('views engine', 'ejs');

app.get('*', (req, res) => {
  const content = render(req);

  res.status(200);
  res.render('index', { content });
});

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
