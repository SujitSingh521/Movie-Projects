import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MovieList = ()=>{
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        axios.get('/movies')
            .then(response => setMovies(response.data))
            .catch(error => console.error(error));
    },[]);

    return (
        <div className="container">
            <h2>Movie List</h2>
            <ul className="list-group">
                {movies.map(movie =>(
                    <li key={movie._id} className="list-group-item">
                        <h4>{movie.title}</h4>
                        <p>{movie.genre}</p>
                        <p>{movie.director}</p>
                        <p>{movie.releaseYear}</p>
                        <p>{movie.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
