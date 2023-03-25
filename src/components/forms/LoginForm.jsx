import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Lock from '../../assets/security-icon.png'
import Google from '../../assets/google-logo.png'
import closedEyes from '../../assets/eyes_closed.png';
import openedEyes from '../../assets/eye_open.png';
import './css/forms.scss';

const LoginForm = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    return (
        <div className="login_form_container">
            <h1>Welcome!</h1>
            <form action="">
                <div className="email_field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Your email address" autoComplete='off' />
                </div>
                <div className="password_field">
                    <label htmlFor="password">Password</label>
                    <div className="password">
                        <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" autoComplete='off' />
                        <div className="input-group-btn">
                            <button type='button' className="password_button" onClick={togglePassword}>
                                {passwordType === "password" ? <img src={closedEyes} alt="" /> : <img src={openedEyes} alt="" />}
                            </button>
                        </div>
                    </div>
                    <span className="forgot_password"  ><Link style={{ color: "black", textDecoration: "none" }} to="">Forgot your password?</Link></span>
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