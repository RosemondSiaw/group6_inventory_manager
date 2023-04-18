import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import Google from '../../assets/google-logo.png'
import closedEyes from '../../assets/eyes_closed.png';
import openedEyes from '../../assets/eye_open.png';
import Microsoft from '../../assets/microsoft.png'
import './css/Auth.scss';

// import PasswordChecklist from "react-password-checklist"

const SignupForm = () => {

    //declaring variables
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
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

    // toggle hide/show password

    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    //const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    //const handleConfirmPasswordChange = (evnt) => {
    //setConfirmPasswordInput(evnt.target.value);
    //}
    const toggleConfirmPassword = () => {
        if (confirmPasswordType === "password") {
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }

    //create account function
    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match.Try again")
        }

        try {
            setError("")
            setLoading(true)
            const firstName = firstNameRef.current.value;
            const lastName = lastNameRef.current.value;
            const username = `${firstName} ${lastName}`;
            await signup(emailRef.current.value, passwordRef.current.value, username)
            navigate("/")
        } catch {
            setError("Failed to create an account. Try again")
            console.log(error)
        }

        setLoading(false)
    }


    return (
        <div className="signup_form_container">
            <h1>Join Us As An Organisation!</h1>
            {error && <div className="error_container"> <span className="error">{error}</span> </div>}
            <form onSubmit={handleSubmit} autoComplete='none'>
                {/* 
                    <div className="fname_field">
                    <label htmlFor="fname">Your first name</label>
                    <input type="text" name='fname' placeholder="Your first name" autoComplete='none' />
                    <input type="text" autoComplete='on' style={{ display: 'none' }} />

                    <div className="lname_field">
                        <label htmlFor="lname">Your last name</label>
                        <input type="text" name='lname' placeholder="Your last name" autoComplete='none' />
                    </div>

                    <div className="company_name_field" style={{ marginTop: '19px' }}>
                    <label htmlFor="">Company name</label>
                    <input type="text" name="company_name" id="company_name" placeholder='Company name' autoComplete='none' />
                    </div>
                </div> */}

                <div className="email_field">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" placeholder="Your first name" ref={firstNameRef} autoComplete='none' required />
                </div>
                <div className="email_field">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" placeholder="Your last name" ref={lastNameRef} autoComplete='none' required />
                </div>
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
                </div>
                <div className="confirm_password_field">
                    <label htmlFor="">Confirm your password</label>
                    <div className="confirmPassword">
                        <input type={confirmPasswordType} ref={passwordConfirmRef} name="password" class="form-control" placeholder="Password" autoComplete='none' required />
                        <div className="input-group-btn">
                            <button type='button' className="password_button" onClick={toggleConfirmPassword}>
                                {confirmPasswordType === "password" ? <img src={closedEyes} alt="" /> : <img src={openedEyes} alt="" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* 
                    <PasswordChecklist
                    rules={["minLength", "specialChar", "number", "capital", "match"]}
                    minLength={8}
                    value={passwordInput}
                    valueAgain={confirmPasswordInput}
                    onChange={(isValid) => { }}
                    style={{ marginBottom: '20px' }}
                />
                */}

                <div className="buttons">
                    <button disabled={loading} type='submit' className='login'> Sign up</button>
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