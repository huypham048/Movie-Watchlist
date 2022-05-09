const express = require('express');
const app = express();
const movieController = require('./server/controllers/movieController');

const port = 3000;

app.use(express.json());

app.get('/api', movieController.getList, async (req, res) => {
  return res.json(res.locals.movieList);
});

app.post('/api', movieController.addMovie, async (req, res) => {
  res.status(201).json(res.locals.newMovie);
});

app.use((err, req, res, next) => {
  res.status(err.status).json(err.message);
});

app.delete('/api', movieController.deleteMovie, (req, res) => {
  res.status(200).json({ message: 'movie deleted' });
});

app.listen(port, () => console.log(`Server started on ${port}`));
