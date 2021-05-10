import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './Styles.css';
import { signin } from '../../actions/worker';
import { useHistory } from "react-router-dom";

function LoginWorker() {
    const [login, setLogin] = useState({ email: '', password: '' });

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = e => {
        const { name, value } = e.target;
        setLogin(prevState => ({
            ...prevState,
            [name]: value
        }))
      };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
        dispatch(signin(login));
        history.push('/ClientPlatform')
    };

    return (
        <div className="login-background">
            <div className="login-container">
                <div className="login-header">
                    <p>Log in to your account</p>
                </div>
                <form className="signin-form" onSubmit={handleSubmit}>
                    <input type="text "name="email" className="signin-input" placeholder="Email" onChange={handleChange} />
                    <input type="text" name="password" className="signin-input" placeholder="Password" onChange={handleChange} />
                    <input className="signup-btn" type="submit" value="Log in" />
                </form>
            </div>
        </div>
    )
}

export default LoginWorker
