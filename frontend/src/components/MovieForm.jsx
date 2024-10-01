import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const MovieForm = ()=>{
    const [movie, setMovie] = useState({title: '', genre: '', director: '', releaseYear: '', description: ''});
    const [error, setError] = useState('');
    const {id} = useParams();  // for edit case
    const navigate = useNavigate();

    useEffect(()=>{
        if(id){
            axios.get(`/movies/${id}`)
                .then(response => setMovie(response.data))
                .catch(error => console.error(error));
        }
    },[id]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const token = localStorage.getItem('token');
        const config = { headers: {'Authorization': `Bearer ${token}`}};

        if(id){
            // Update movie
            axios.put(`/movies/${id}`, movie, config)
                .then(()=> navigate('/movies'))
                .catch(error => setError('Failed to update movie'));
        }else{
            // Create new movie
            axios.post('/movies', movie, config)
                .then(()=> navigate('/movies'))
                .catch(error => setError('Failed to add movie'));
        }
    };

    const handleChange = (e)=>{
        setMovie({...movie, [e.target.name]: e.target.value});
    };

    return(
        <div className="container">
            <h2>{id ? 'Edit Movie' : 'Add Movie'}</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" value={movie.title} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input type="text" name="genre" value={movie.genre} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Director</label>
                    <input type="text" name="director" value={movie.director} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Release Year</label>
                    <input type="number" name="releaseYear" value={movie.releaseYear} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" value={movie.description} onChange={handleChange} className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary mt-3">{id ? 'Update Movie' : 'Add Movie'}</button>
            </form>
        </div>
    );
};

export default MovieForm;
