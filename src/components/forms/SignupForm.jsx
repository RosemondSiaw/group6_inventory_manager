import React from 'react';
import { Link } from 'react-router-dom'
import Google from '../../assets/google-logo.png'
import './css/forms.scss';

const SignupForm = () => {
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
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" placeholder='Password' />
                </div>
                <div className="confirm_password_field">
                    <label htmlFor="">Confirm your password</label>
                    <input type="password" name="" id="" placeholder='Confirm your password' />
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
                <Link style={{ color: "#68B984", textDecoration: "none" }} to='/login'>Already have an account? Signin here.</Link>
            </div>
        </div>)
}

export default SignupForm