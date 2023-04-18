import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
const infoIcon = <FontAwesomeIcon icon={faCircleInfo} />

const EmployeeSignup = () => {
  return (
    <div className="employee_signup">
      <h1> {infoIcon} &nbsp; Keep an eye on your email inbox</h1>
      <p>Please sign up to Geia via the link in the email invitation from your administrator. We're looking forward to seeing you soon.</p>
    </div>
  )
}

export default EmployeeSignup