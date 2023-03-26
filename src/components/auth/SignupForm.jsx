import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../scripts/firebase'
import { Link } from 'react-router-dom'
import Google from '../../assets/google-logo.png'
import closedEyes from '../../assets/eyes_closed.png';
import openedEyes from '../../assets/eye_open.png';
import Microsoft from '../../assets/microsoft.png'
import './css/Auth.scss';

import PasswordChecklist from "react-password-checklist"

const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [cname, setCname] = useState("");

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

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, fname, lname, cname, passwordInput)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            })
    }


    return (
        <div className="signup_form_container">
            <h1>Join Us!</h1>
            <form onSubmit={signUp} autoComplete='none'>
                <div className="fname_field">
                    <label htmlFor="fname">Your first name</label>
                    <input type="text" name='fname' placeholder="Your first name" onChange={(e) => setFname(e.target.value)} autoComplete='none' />
                    <input type="text" autoComplete='on' style={{ display: 'none' }} />
                </div>
                <div className="lname_field">
                    <label htmlFor="lname">Your last name</label>
                    <input type="text" name='lname' placeholder="Your last name" onChange={(e) => setLname(e.target.value)} autoComplete='none' />
                </div>
                <div className="email_field">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Your email addres" onChange={(e) => setEmail(e.target.value)} autoComplete='none' />
                </div>
                <div className="password_field">
                    <label htmlFor="password">Password</label>
                    <div className="password">
                        <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" autoComplete='none' />
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
                        <input type={confirmPasswordType} onChange={handleConfirmPasswordChange} value={confirmPasswordInput} name="password" class="form-control" placeholder="Password" autoComplete='none' />
                        <div className="input-group-btn">
                            <button type='button' className="password_button" onClick={toggleConfirmPassword}>
                                {confirmPasswordType === "password" ? <img src={closedEyes} alt="" /> : <img src={openedEyes} alt="" />}
                            </button>
                        </div>
                    </div>
                </div>
                <PasswordChecklist
                    rules={["minLength", "specialChar", "number", "capital", "match"]}
                    minLength={8}
                    value={passwordInput}
                    valueAgain={confirmPasswordInput}
                    onChange={(isValid) => { }}
                />
                <div className="company_name_field" style={{ marginTop: '19px' }}>
                    <label htmlFor="">Company name</label>
                    <input type="text" name="company_name" id="company_name" placeholder='Company name' onChange={(e) => setCname(e.target.value)} autoComplete='none' />
                </div>
                <div className="buttons">
                    <button type='submit' className='login'> Sign up</button>
                    <span>or</span>
                    <button className="google-signin"> <img src={Google} alt="" /> &nbsp; Sign up with Google</button>
                    <button className="google-signin"> <img src={Microsoft} alt="" /> &nbsp; Sign up with Microsoft</button>
                </div>
            </form>
            <div className="login_external_link">
                <Link style={{ color: "#68B984", textDecoration: "none" }} to='/login'>Already have an account? Sign in here.</Link>
            </div>
        </div>)
}

export default SignupForm