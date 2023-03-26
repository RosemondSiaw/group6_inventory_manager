import React from 'react'
import SignupForm from '../../components/auth/SignupForm'
import './css/Signup.scss'

import Logo from '../../assets/geia-logo.png'
import Blob1 from '../../assets/blob/blob1.png'
import Blob2 from '../../assets/blob/blob2.png'

const Signup = () => {
  return (
    <div className="signup_container">
      <div className="blob">
        <img className='blob1' src={Blob1} alt="" />
        <img className='blob2' src={Blob2} alt="" />
      </div>
      <div className="signup_container_content">
        <div className="signup_content">
          <div className="logo_container">
            <img src={Logo} alt="" />
          </div>
          <div className="form_container">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup