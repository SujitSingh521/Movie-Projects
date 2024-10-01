const express = require('express');
const Movie = require('../models/Movie');
const {protect, adminOnly} = require('../middleware/authMiddleware');
const router = express.Router();

//  GET /movies
//  Get all movies
router.get('/', protect, async(req, res)=>{
    try{
        const movies = await Movie.find().populate('user', 'username');  // Show username of creator
        res.json(movies);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

//  GET /movies/:id
//  Get a movie by ID
router.get('/:id', protect, async(req, res)=>{
    try{
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({message: 'Movie not found'});
        res.json(movie);
    }catch (error){
        res.status(500).json({message: error.message});
    }
});

//  POST /movies
//  Create a new movie (Admin only)
router.post('/', protect, adminOnly, async(req, res)=>{
    const {title, genre, director, releaseYear, description} = req.body;
    
    try{
        const movie = new Movie({title, genre, director, releaseYear, description, user: req.user.id});
        await movie.save();
        res.status(201).json(movie);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

//  PUT /movies/:id
//  Update a movie (Admin only)
router.put('/:id', protect, adminOnly, async (req, res) =>{
    const {title, genre, director, releaseYear, description} = req.body;

    try {
        let movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });

        movie = await Movie.findByIdAndUpdate(req.params.id, { title, genre, director, releaseYear, description }, { new: true });
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//  DELETE /movies/:id
//  Delete a movie (Admin only)
router.delete('/:id', protect, adminOnly, async(req, res)=>{
    try{
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({message: 'Movie not found'});

        await movie.remove();
        res.json({message: 'Movie removed'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;
