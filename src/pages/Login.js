import { useState } from 'react';
import { useHistory } from 'react-router';
import localStorageService from '../services/localStorageService';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const [show, setShow] = useState(true);

    const history = useHistory();

    const validateInput = () => {
        const newError = {};
        if (!email) newError.email = 'email is required';
        if (!password) newError.password = 'password is required';
        setError(newError);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            validateInput();
            const res = await axios.post('http://localhost:8000/user/login', { email, username, password });
            localStorageService.setToken(res.data.token);
            history.push('/hometest');
        } catch (err) {
            console.dir(err);
            setError(prev => ({ ...prev, login: err.response.data.message }));
        };
    };

    return (
        <div>
            <div style={{
                display: 'table', position: 'absolute', height: '100%', width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                    <div style={{ margin: '0 auto', padding: '40px', minWidth: '320px', maxWidth: '440px', minHeight: '338px', backgroundColor: 'rgba(255,255,255,95%)', boxShadow: '0 2px 3px rgba(0,0,0,55%)' }}>
                        <h3>Sign in</h3>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <select onChange={() => setShow(!show)}>
                                    <option>Email</option>
                                    <option>Username</option>
                                </select>
                            </div>
                            {show && <div>
                                <input
                                    style={{ width: '100%', height: '30px', margin: '10px 0', border: '0', borderBottom: '1px solid #ccc', outline: '0' }}
                                    type='text'
                                    name='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                {error.email && (
                                    <span style={{ color: 'red' }}>
                                        {error.email}
                                    </span>
                                )}
                            </div>}
                            {!show && <div>
                                <input
                                    style={{ width: '100%', height: '30px', margin: '10px 0', border: '0', borderBottom: '1px solid #ccc', outline: '0' }}
                                    type='text'
                                    name='username'
                                    placeholder='Username'
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </div>}
                            <div>
                                <input
                                    style={{ width: '100%', height: '30px', margin: '0 0 10px 0', border: '0', borderBottom: '1px solid #ccc', outline: '0' }}
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                {error.password && (
                                    <span style={{ color: 'red' }}>
                                        {error.password}
                                    </span>
                                )}
                                {error.login && (
                                    <span style={{ color: 'red' }}>
                                        {error.login}
                                    </span>
                                )}
                            </div>
                            {/* <p style={{ margin: '10px 0' }}>No account? <a href='http://localhost:3000/register' onClick={() => history.push('/register')}>Sign up!</a></p> */}
                            <button width='100px' height='30px' type='submit'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;