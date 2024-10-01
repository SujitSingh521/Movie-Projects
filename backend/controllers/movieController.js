const Movie = require('../models/movie');

exports.getAllMovies = async(req, res)=>{
    const movies = await Movie.find();
    res.json(movies);
};

exports.createMovie = async(req, res)=>{
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).send(movie);
};

exports.updateMovie = async(req, res)=>{
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(movie);
};

exports.deleteMovie = async(req, res)=>{
    await Movie.findByIdAndDelete(req.params.id);
    res.status(204).send();
};
