import React from 'react';
import { Link } from 'react-router-dom'
import Lock from '../../assets/security-icon.png'
import Google from '../../assets/google-logo.png'
import './css/forms.scss';

const LoginForm = () => {
    return (
        <div className="login_form_container">
            <h1>Welcome!</h1>
            <form action="">
                <div className="email_field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Your email address" />
                </div>
                <div className="password_field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Password' />
                    <span className="forgot_password"><Link style={{ color: "black", textDecoration: "none" }} to="">Forgot your password?</Link></span>
                </div>
                <div className="buttons">
                    <button className='login'> <img src={Lock} alt="" /> &nbsp; Login</button>
                    <span>or</span>
                    <button className="google-signin"> <img src={Google} alt="" /> &nbsp; Sign in with Google</button>
                </div>
            </form>
            <div className="signup_external_link">
                <Link style={{ color: "#68B984", textDecoration: "none" }} to='/signup'>Don't have an account? Sign up here.</Link>
            </div>
        </div>
    )
}

export default LoginForm