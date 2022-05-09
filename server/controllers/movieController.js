const Movie = require('../models/movieModel');

const movieController = {};

movieController.addMovie = async (req, res, next) => {
  const { title, overview, poster_path, vote_average, release_date } = req.body;

  try {
    const movie = await Movie.create({
      title,
      overview,
      poster_path,
      vote_average,
      release_date,
    });
    res.locals.newMovie = movie;
    return next();
  } catch (err) {
    return next({
      status: 400,
      message: 'Failed to add movie to the database',
    });
  }
};

movieController.getList = async (req, res, next) => {
  try {
    const list = await Movie.find({});
    res.locals.movieList = list;
    return next();
  } catch (err) {
    return next({
      status: 400,
      message: 'Failed to get movie list',
    });
  }
};

movieController.deleteMovie = async (req, res, next) => {
  try {
    const list = await Movie.deleteOne({ _id: req.body._id });

    return next();
  } catch (err) {
    return next({
      status: 400,
      message: 'Failed to get delele list',
    });
  }
};
module.exports = movieController;
