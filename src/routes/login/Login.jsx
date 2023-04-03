import React from 'react'
import LoginForm from '../../components/auth/LoginForm'
import './css/Login.scss'

import Logo from '../../assets/geia-logo.png'
import Blob1 from '../../assets/blob/blob1.png'
import Blob2 from '../../assets/blob/blob2.png'

const Login = () => {
  return (
    <div className="login_container">
      <div className="blob">
        <img className='blob1' src={Blob1} alt="" />
        <img className='blob2' src={Blob2} alt="" />
      </div>
      <div className="login_container_content">
        <div className="login_content">
          <div className="logo_container">
            <img src={Logo} alt="" />
          </div>
          <div className="form_container">
            <div className="form">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login