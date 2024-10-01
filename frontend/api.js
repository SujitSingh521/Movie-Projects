import axios from 'axios';

const API_URL ='http://localhost:5000';

export const registerUser = async (userData)=>{
    return await axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async(userData)=>{
    return await axios.post(`${API_URL}/auth/login`, userData);
};

export const fetchMovies = async()=>{
    return await axios.get(`${API_URL}/movies`);
};

export const createMovie = async(movieData, token)=>{
    return await axios.post(`${API_URL}/movies`, movieData,{
        headers: { Authorization: `Bearer ${token}`}
    });
};

export const updateMovie = async(id, movieData, token)=>{
    return await axios.put(`${API_URL}/movies/${id}`, movieData,{
        headers: {Authorization: `Bearer ${token}`}
    });
};

export const deleteMovie = async (id, token)=>{
    return await axios.delete(`${API_URL}/movies/${id}`,{
        headers: {Authorization: `Bearer ${token}`}
    });
};
