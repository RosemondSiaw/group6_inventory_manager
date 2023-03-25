import React from "react";
import { FormattedMessage } from "react-intl";
import './css/forms.scss';

const NewVendorForm = () => {

    return (
        <div className="new_vendor_form_container">
            <form action="">
                <div className="form_fields">
                    <input type="text" name="vendor_name" id="vendor_name" placeholder="Vendor name" />
                    <input type="text" name="contact_p_fname" id="contact_p_fname" placeholder="Contact Person First Name" />
                    <input type="text" name="contact_p_lname" id="contact_p_lname" placeholder="Contact Person Last Name" />
                    <input type="email" name="contact_p_email" id="contact_p_email" placeholder="Email" />
                    <input type="tel" name="contact_p_tel" id="contact_p_tel" placeholder="Phone" />
                    <select name="payment_terms" id="payment_terms">
                        <option value="" selected>Payment Terms</option>
                        <option value="">Net 30</option>
                        <option value="">Net 60</option>
                        <option value="">Cash on Delivery</option>
                        <option value="">Advance Payment</option>
                        <option value="">Installments</option>
                        <option value="">Deferred Payment</option>
                        <option value="">Letter of Credit</option>
                    </select>
                    <input type="text" name="vendor_billing_address" id="vendor_billing_address" placeholder="Billing address" />
                </div>

                <div className="submit-btn">
                    <button type="submit"><FormattedMessage id="popup.form.save.button" defaultMessage="SAVE" /></button>                </div>
            </form>
        </div>)
}

export default NewVendorForm