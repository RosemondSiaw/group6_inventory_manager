import React from "react";
import { FormattedMessage } from "react-intl";
import './css/forms.scss'

const NewUserForm = () => {


    return (
        <div className="new_user_form_container">
            <form action="">
                <div className="form_fields">
                    <input type="text" name="staff_id" id="staff_id" placeholder="Staff ID" />
                    <input type="text" name="staff_fname" id="staff_fname" placeholder="First Name" />
                    <input type="text" name="staff_lname" id="staff_lname" placeholder="Last Name" />
                    <input type="email" name="staff_email" id="staff_email" placeholder="Email" />
                    <input type="tel" name="staff_tel" id="staff_tel"  placeholder="Phone"/>
                    <input type="text" name="job_title" id="job_title" placeholder="Job Title" />
                    <select name="" id="">
                        <option value="" selected>Access type</option>
                        <option value="">Adminitrator</option>
                        <option value="">User</option>
                        <option value="">Client</option>
                    </select>
                </div>
                <div className="submit-btn">
                    <button type="submit"><FormattedMessage id="popup.form.save.button" defaultMessage="SAVE" /></button>
                </div>
            </form>
        </div>
    )
}

export default NewUserForm