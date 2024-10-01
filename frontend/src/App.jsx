import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import MovieDetails from './components/MovieDetails';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = ()=>{
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/movies" element={<MovieList />}/>
                    <Route path="/movies/add" element={<MovieForm />}/>
                    <Route path="/movies/:id" element={<MovieDetails />}/>
                    <Route path="/movies/edit/:id" element={<MovieForm />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;


