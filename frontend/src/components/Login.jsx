import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = ()=>{
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [error, setError] =useState('');
    const navigate =useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();

        axios.post('/auth/login', {email, password})
            .then(response =>{
                localStorage.setItem('token', response.data.token);
                navigate('/movies');
            })
            .catch(error =>setError('Invalid email or password'));
    };

    return(
        <div className="container">
            <h2>Login</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Login</button>
            </form>
        </div>
    );
};

export default Login;
