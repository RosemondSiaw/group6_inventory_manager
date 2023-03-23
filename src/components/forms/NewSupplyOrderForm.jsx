import React, { useRef } from 'react'
import { FormattedMessage } from "react-intl";
import './css/forms.scss'

const NewSupplyOrderForm = () => {
    const start_ref = useRef();
    const end_ref = useRef();
    return (
        <div className="new_supply_order_form_container">
            <form action="">
                <input type="text" placeholder="Activity name" />
                <select name="" id="">
                    <option value="" selected>Activity type</option>
                    <option value="">Appointment</option>
                    <option value="">Event</option>
                </select>
                <input type="text" placeholder="Participants" />
                <input type="text" placeholder="Location/Room/Office" />
                <div className="datetime_picker">
                    <input
                        type="text"
                        ref={start_ref}
                        onChange={(e) => console.log(e.target.value)}
                        onFocus={() => (start_ref.current.type = "datetime-local")}
                        onBlur={() => (start_ref.current.type = "datetime-local")}
                        placeholder="Start Date & Time"
                    />
                    <input
                        type="text"
                        ref={end_ref}
                        onChange={(e) => console.log(e.target.value)}
                        onFocus={() => (end_ref.current.type = "datetime-local")}
                        onBlur={() => (end_ref.current.type = "datetime-local")}
                        placeholder="End Date & Time"
                    />
                </div>
                <textarea name="" id="" cols="30" rows="5" placeholder="Event Description" />
                <select name="" id="">
                    <option value="" selected>Status</option>
                </select>
                <select name="" id="">
                    <option value="">Reminder</option>
                </select>
                <div className="submit-btn">
                    <button type="submit"><FormattedMessage id="popup.form.save.button" defaultMessage="SAVE" /></button>                </div>
            </form>
        </div>)
}

export default NewSupplyOrderForm