import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const { error, singInUsingGoogle, signUpUsingPassword } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_Uri = location.state?.from || '/home';

    const landleGoogleLogin = () => {
        singInUsingGoogle()
            .then(result => {
                history.push(redirect_Uri)
            })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleRegistration = () => {
        signUpUsingPassword(email, password)
        history.push(redirect_Uri);

    }


    return (
        <div className="container w-75">
            <h2 className="text-secondary mt-3">Please Registration</h2>
            <h3 className="text-danger mt-3">{error}</h3>
            <div className="mb-3 text-start mt-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="skemonalom@gmail.com" required />
            </div>

            <div className="mb-3 text-start">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleFormControlInput1" placeholder="" />

                <div className="mt-3 d-md-flex">
                    <button onClick={handleRegistration} className=" btn-sm bg-info me-3">Register</button>
                    <Link className="register-allReady" to="/signin">Already Registerd ?</Link>
                </div>
            </div>

            <div className="py-3 mb-3">
                <button onClick={landleGoogleLogin} className="bg-primary text-white px-3 py-1 mb-5"><i className="fab fa-google"></i> Sign In With Google </button>
            </div>
        </div>
    );
};

export default Login;