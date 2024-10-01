import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const MovieDetails = ()=>{
    const [movie, setMovie] =useState(null);
    const {id} =useParams();

    useEffect(()=>{
        axios.get(`/movies/${id}`)
            .then(response => setMovie(response.data))
            .catch(error => console.error(error));
    },[id]);

    if(!movie) return <div>Loading...</div>;

    return(
        <div className="container">
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Director: {movie.director}</p>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Description: {movie.description}</p>
        </div>
    );
};

export default MovieDetails;
