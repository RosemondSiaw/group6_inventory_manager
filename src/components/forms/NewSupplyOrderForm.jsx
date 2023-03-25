import React from 'react'
import { FormattedMessage } from "react-intl";
import './css/forms.scss'

const NewSupplyOrderForm = () => {

    return (
        <div className="new_supply_order_form_container">
            <form action="">
                <div className="form_fields"></div>
                <div className="submit-btn">
                    <button type="submit"><FormattedMessage id="popup.form.save.button" defaultMessage="SAVE" /></button>                </div>
            </form>
        </div>)
}

export default NewSupplyOrderForm