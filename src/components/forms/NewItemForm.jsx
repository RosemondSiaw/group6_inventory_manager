import React from "react";
import { FormattedMessage } from "react-intl";
import './css/forms.scss';

const NewItemForm = () => {

    return (
        <div className="new_item_form_container">
            <form action="">
                <input type="text" name="barcode" id="barcode" placeholder="Barcode" />
                <input type="text" name="item_name" id="item_name" placeholder="Item Name" />
                <input type="text" name="vendor" id="vendor" placeholder="Vendor" />
                <input type="text" name="manufacturer" id="manufacturer" placeholder="Manufacturer" />
                <textarea name="" id="" cols="30" rows="5" placeholder="Item Description" />
                <select name="" id="">
                    <option value="" selected>Item category</option>
                    <option value="">Electronic</option>
                    <option value="">Diagnostic</option>
                    <option value="">Surgical</option>
                    <option value="">Durable Medical Equipment</option>
                    <option value="">Acute Care</option>
                </select>
                <input type="number" name="cost_per_item" id="cost_per_item" placeholder="Cost Per Item" min={0} />
                <input type="number" name="stock_quantity" id="stock_quantity" placeholder="Stock Quantity" min={0} />
                <div className="submit-btn">
                    <button type="submit"><FormattedMessage id="popup.form.save.button" defaultMessage="SAVE" /></button>
                </div>
            </form>
        </div>
    )
}

export default NewItemForm