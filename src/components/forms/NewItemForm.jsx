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
                <input type="number" name="reorder_level" id="reorder_level" placeholder="Reorder Level" min={10} />
                <input type="number" name="days_per_reorder" id="days_per_reorder" placeholder="Days Per Reorder" min={7} />
                <select name="" id="">
                    <option value="" selected>Item discontinued?</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                </select>
                <div className="volume">
                    <select name="" id="">
                        <option value="" selected>Choose a metric unit of liquid volume</option>
                        <option value="">cl</option>
                        <option value="">ml</option>
                        <option value="">l</option>
                    </select>
                    <input type="number" name="" id="" min={1} placeholder="Volume" />
                </div>
                <div className="dimensions">
                    <select name="" id="">
                        <option value="" selected>Choose a metric unit of length</option>
                        <option value="">Inches</option>
                        <option value="">Meters</option>
                    </select>
                    <input type="number" name="" id="" min={1} placeholder="Length" />
                    <input type="number" name="" id="" min={1} placeholder="Width" />
                    <input type="number" name="" id="" min={1} placeholder="Height" />
                </div>
                <div className="weight">
                    <select name="" id="">
                        <option value="" selected>Weight metrics</option>
                        <option value="">Pounds</option>
                        <option value="">Kilogram</option>
                    </select>
                    <input type="number" name="" id="" min={1} placeholder="Weight" />
                </div>
                <div className="submit-btn">
                    <button type="submit"><FormattedMessage id="popup.form.save.button" defaultMessage="SAVE" /></button>
                </div>
            </form>
        </div>
    )
}

export default NewItemForm