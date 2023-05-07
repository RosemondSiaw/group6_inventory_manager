import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import './css/forms.scss'

const NewUserForm = () => {

    const [staffId, setStaffId] = useState('')
    const [firstName, setFname] = useState('')
    const [lastName, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setTel] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [userStatus, setStatus] = useState('')
    const [shippingAddress, setShipping] = useState('')
    const [location, setLocation] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const staff = { staffId, firstName, lastName, email, phone, jobTitle, userStatus, shippingAddress, location }

        const response = await fetch('/api/staffs', {
            method: 'POST',
            body: JSON.stringify(staff),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setStaffId('')
            setFname('')
            setLname('')
            setEmail('')
            setTel('')
            setJobTitle('')
            setStatus('')
            setShipping('')
            setLocation('')
            setError(null)
            console.log('New staff member added', json)
        }
    }

    return (
        <div className="new_user_form_container">
            <form onSubmit={handleSubmit}>
                <div className="form_fields">
                    <input
                        type="text"
                        name="staff_id"
                        id="staff_id"
                        placeholder="Staff ID"
                        onChange={(e) => setStaffId(e.target.value)}
                        value={staffId}
                    />

                    <input
                        type="text"
                        name="staff_fname"
                        id="staff_fname"
                        placeholder="First Name"
                        onChange={(e) => setFname(e.target.value)}
                        value={firstName}
                    />

                    <input
                        type="text"
                        name="staff_lname"
                        id="staff_lname"
                        placeholder="Last Name"
                        onChange={(e) => setLname(e.target.value)}
                        value={lastName}
                    />

                    <input
                        type="email"
                        name="staff_email"
                        id="staff_email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <input
                        type="tel"
                        name="staff_tel"
                        id="staff_tel"
                        placeholder="Phone" onChange={(e) => setTel(e.target.value)}
                        value={phone}
                    />

                    <input
                        type="text"
                        name="job_title"
                        id="job_title"
                        placeholder="Job Title"
                        onChange={(e) => setJobTitle(e.target.value)}
                        value={jobTitle}
                    />

                    <select name="status" id="status" onChange={(e) => setStatus(e.target.value)}>
                        <option selected>Status</option>
                        <option value="Active">Active</option>
                        <option value="On Leave">On Leave</option>
                        <option value="Terminated">Terminated</option>
                        <option value="Suspended">Suspended</option>
                    </select>

                    <select name="location" id="location" onChange={(e) => setLocation(e.target.value)}>
                        <option selected>Location</option>
                        <option value="Location 1">Location 1</option>
                        <option value="Location 2">Location 2</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Shipping address"
                        name="shippingAddress"
                        onChange={(e) => setShipping(e.target.value)}
                        value={shippingAddress}
                    />

                </div>
                <div className="submit-btn">
                    <button type="submit"><FormattedMessage id="popup.form.save.button" defaultMessage="SAVE" /></button>
                </div>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default NewUserForm