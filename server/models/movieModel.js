const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moviedb');
const movieSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  overview: String,
  poster_path: String,
  vote_average: Number,
  release_date: String,
});

module.exports = mongoose.model('Movie', movieSchema);
