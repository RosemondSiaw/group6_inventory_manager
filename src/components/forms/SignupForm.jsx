import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Google from '../../assets/google-logo.png'
import closedEyes from '../../assets/eyes_closed.png';
import openedEyes from '../../assets/eye_open.png';
import './css/forms.scss';

const SignupForm = () => {
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

    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const handleConfirmPasswordChange = (evnt) => {
        setConfirmPasswordInput(evnt.target.value);
    }
    const toggleConfirmPassword = () => {
        if (confirmPasswordType === "password") {
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }


    return (
        <div className="signup_form_container">
            <h1>Join Us!</h1>
            <form action="">
                <div className="fname_field">
                    <label htmlFor="fname">Your first name</label>
                    <input type="text" name='fname' placeholder="Your first name" />
                </div>
                <div className="lname_field">
                    <label htmlFor="lname">Your last name</label>
                    <input type="text" name='lname' placeholder="Your last name" />
                </div>
                <div className="email_field">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Your email addres" />
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
                </div>
                <div className="confirm_password_field">
                    <label htmlFor="">Confirm your password</label>
                    <div className="confirmPassword">
                        <input type={confirmPasswordType} onChange={handleConfirmPasswordChange} value={confirmPasswordInput} name="password" class="form-control" placeholder="Password" autoComplete='off' />
                        <div className="input-group-btn">
                            <button type='button' className="password_button" onClick={toggleConfirmPassword}>
                                {confirmPasswordType === "password" ? <img src={closedEyes} alt="" /> : <img src={openedEyes} alt="" />}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="company_name_field">
                    <label htmlFor="">Company name</label>
                    <input type="text" placeholder='Company name' />
                </div>
                <div className="buttons">
                    <button className='login'> Sign up</button>
                    <span>or</span>
                    <button className="google-signin"> <img src={Google} alt="" /> &nbsp; Sign up with Google</button>
                </div>
            </form>
            <div className="login_external_link">
                <Link style={{ color: "#68B984", textDecoration: "none" }} to='/login'>Already have an account? Sign in here.</Link>
            </div>
        </div>)
}

export default SignupForm