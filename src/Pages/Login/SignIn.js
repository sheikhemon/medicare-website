import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const { error, singInUsingGoogle, signInUsingPassword } = useAuth();

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

    const loginInUsingPassword = () => {
        signInUsingPassword(email, password)
        history.push(redirect_Uri)
    }

    return (
        <div className="container w-75">
            <h2 className="text-secondary mt-3">Please Login</h2>
            <h3 className="text-danger mt-3">{error}</h3>
            <div className="mb-3 text-start mt-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="alishorif4321@gmail.com" required />
            </div>

            <div className="mb-3 text-start">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleFormControlInput1" placeholder="" />

                <div className="mt-3">
                    <button onClick={loginInUsingPassword} className=" btn-sm bg-info me-3 ">Login</button>
                    <Link to="/login">I have no account</Link>
                </div>
            </div>

            <div className="py-3 mb-3">
                <button onClick={landleGoogleLogin} className="live "><i className="fab fa-google"></i> Sign In With Google </button>
            </div>
        </div>
    );
};

export default SignIn;