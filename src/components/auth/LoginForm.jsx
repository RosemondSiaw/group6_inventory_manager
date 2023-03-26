import React, { useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import Lock from '../../assets/security-icon.png'
import Google from '../../assets/google-logo.png'
import closedEyes from '../../assets/eyes_closed.png';
import openedEyes from '../../assets/eye_open.png';
import Microsoft from '../../assets/microsoft.png'
import './css/Auth.scss';

const LoginForm = () => {

    //declaring variables
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    // toggle hide/show password

    const [passwordType, setPasswordType] = useState("password");
    //const [passwordInput, setPasswordInput] = useState("");
    //const handlePasswordChange = (evnt) => {
    //setPasswordInput(evnt.target.value);
    //}
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    //log into an account function
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            setError("Failed to log in. Wrong email/password. Try again")
        }

        setLoading(false)
    }

    return (
        <div className="login_form_container">
            {currentUser && currentUser.email}
            <h1>Welcome!</h1>
            {error && <div className="error_container"> <span className="error">{error}</span> </div>}
            <form onSubmit={handleSubmit} autoComplete='none'>
                <div className="email_field">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Your email address" ref={emailRef} autoComplete='none' required />
                </div>
                <div className="password_field">
                    <label htmlFor="password">Password</label>
                    <div className="password">
                        <input type={passwordType} ref={passwordRef} name="password" class="form-control" placeholder="Password" autoComplete='none' required />
                        <div className="input-group-btn">
                            <button type='button' className="password_button" onClick={togglePassword}>
                                {passwordType === "password" ? <img src={closedEyes} alt="" /> : <img src={openedEyes} alt="" />}
                            </button>
                        </div>
                    </div>
                    <span className="forgot_password"> <Link style={{ textDecoration: 'none', color: '#000000' }}>Forgot your password?</Link> </span>
                </div>
                <div className="buttons">
                    <button disabled={loading} type='submit' className='login'> <img src={Lock} alt="" /> &nbsp; Log in</button>
                    <span>or</span>
                    <button className="google-signin"> <img src={Google} alt="" /> &nbsp; Log in with Google</button>
                    <button className="google-signin"> <img src={Microsoft} alt="" /> &nbsp; Log in with Microsoft</button>
                </div>
            </form>
            <div className="signup_external_link">
                <Link style={{ color: "#68B984", textDecoration: "none" }} to='/signup'>Don't have an account? Sign up here.</Link>
            </div>
        </div>
    )
}

export default LoginForm