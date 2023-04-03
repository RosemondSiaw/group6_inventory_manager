import React, { useState } from 'react'
import SignupForm from '../../components/auth/SignupForm'
import EmployeeSignup from '../../components/auth/EmployeeSignup'
import './css/Signup.scss'

import Logo from '../../assets/geia-logo.png'
import Blob1 from '../../assets/blob/blob1.png'
import Blob2 from '../../assets/blob/blob2.png'

const Signup = () => {

  const [userType, setUserType] = useState('admin')

  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setUserType(target.value);
    }
  };

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
            <div className="select_user_login">
              <div className="i_am_user"> <input type="radio" value="admin" id="amin" checked={userType === 'admin'} onChange={handleChange} /> &nbsp; I am an administrator</div>
              <div className="i_am_user"> <input type="radio" value="employee" id="employee" checked={userType === 'employee'} onChange={handleChange} /> &nbsp; I am an employee</div>
            </div>
            <div className="form">
              {userType === 'admin' ? <SignupForm /> : <EmployeeSignup />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup