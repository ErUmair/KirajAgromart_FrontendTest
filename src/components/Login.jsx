import React, { useState } from 'react';
// import './Login.css';
import brand from '../assets/ohrm_branding.png';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login', { username, password });
          if (username === 'Admin' && password === 'admin123') {
            onLogin(true);
            navigate('/pim/addemployee');
          } else {
            // Handle login error
            alert('Incorrect username or password');
          }
    };

    return (
        <div className='login-layout'>
            <div className='login-layout-blob'>
                <div className='flex justify-center align-center bg-neutral-300 mt-8' 
                style={{
                    width: '350px',
                    padding: '16px',
                    marginLeft: '38%',
                    color:'#8e859c',
                    borderRadius:"20px"
                }}
                >
                    <div className=''>
                        <div>Username : Admin</div>
                        <div>Password : admin123</div>
                    </div>
                    
                </div>
                <div className='mainLogin-container mt-10'>
                    <div className="login-container">
                        <div className="logo">
                            <img src={brand} alt="OrangeHRM Logo" />
                        </div>
                        <div className="login-box">
                            <h2>Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                    />
                                </div>
                                <button type="submit" className='login-button'>Login</button>
                            </form>
                            <p>Forgot your password?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
