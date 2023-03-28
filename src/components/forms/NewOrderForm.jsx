import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormattedMessage } from "react-intl";
import './css/forms.scss'

const NewOrderForm = () => {
    // declaring variables
    const [ItemName, setItemName] = useState("")
    const [ItemPrice, setItemPrice] = useState("")
    const [ItemQuantity, setItemQuantity] = useState("")
    const [ItemCost, setItemCost] = useState("")
    const [list, setList] = useState("")
    const [Note, setNote] = useState("")

    // input dynamic input fields
    const [inputFields, setInputFields] = useState([
        { item_name: '', item_price: '', item_quantity: '', item_cost: '', },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItems = {
            id: uuidv4(),
            ItemName,
            ItemPrice,
            ItemQuantity,
            ItemCost,
        }
        setItemName("")
        setItemPrice("")
        setItemQuantity("")
        setItemCost("")
        setList([...list, newItems])
        console.log(list)
    };

    const handleAdd = () => {
        const newInputFields = [...inputFields];
        newInputFields.push({
            item_name: '',
            item_price: '',
            item_quantity: '',
            item_cost: '',
        });
        setInputFields(newInputFields);
    }

    const handleRemove = (index) => {
        const newInputFields = [...inputFields];
        newInputFields.splice(index, 1);
        setInputFields(newInputFields);
    }

    const onItemNameChange = (value, index) => {
        const newInputFields = [...inputFields];
        newInputFields[index].item_name = value;
        setInputFields(newInputFields);
    }
    const onItemPriceChange = (value, index) => {
        const newInputFields = [...inputFields];
        newInputFields[index].item_price = value;
        newInputFields[index].item_cost =
            (parseInt(newInputFields[index].item_price, 10) || 0) *
            (parseInt(newInputFields[index].item_quantity, 10) || 0);
        setInputFields(newInputFields);
    }
    const onItemQuantityChange = (value, index) => {
        const newInputFields = [...inputFields];
        newInputFields[index].item_quantity = value;
        newInputFields[index].item_cost =
            parseInt(newInputFields[index].item_price, 10) *
            parseInt(newInputFields[index].item_quantity, 10);
        setInputFields(newInputFields);
    }
    /* END FUNCTIONS FOR DYNAMIC ITEMS FIELD */

    return (
        <div className="new_order_form_container">
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="form_header">
                        <div className="form_state"><span>Draft</span></div>
                        <div className="date_of_creation">
                            <p className="title">Created</p>
                            <p className="date">10/02/2023</p>
                        </div>
                    </div>

                    <div className="shipping_container">
                        <div className="shipping_information">
                            <p>Shipping Information</p>

                            <div className="staff_information">
                                <input type="text" placeholder="Staff Name" />
                                <input type="text" placeholder="Shipping Address" />
                            </div>
                        </div>
                        <div className="expected_shipping_date">
                            <p className="title">Expected shipping date</p>
                            <input type="date" />
                        </div>
                    </div>
                    <div className="order_items">
                        <div className="title">
                            <p>Add items or products</p>
                        </div>
                        {inputFields.map((inputField, index) => (
                            <div key={index} className="item_container">
                                <div className="item_fields">
                                    <input
                                        name="item_name"
                                        value={inputField.item_name}
                                        onChange={(e) => onItemNameChange(e.target.value, index)}
                                        type="text"
                                        placeholder="Item Name"
                                    />

                                    <input
                                        name="item_price"
                                        value={inputField.item_price}
                                        onChange={(e) => onItemPriceChange(e.target.value, index)}
                                        type="number"
                                        placeholder="Item Price"
                                        min={1}
                                    />

                                    <input
                                        name="item_quantity"
                                        value={inputField.item_quantity}
                                        onChange={(e) => onItemQuantityChange(e.target.value, index)}
                                        type="number" id=""
                                        placeholder="Quantity"
                                        min={1}
                                    />

                                    <p name="item_cost">
                                        Subtotal: {inputField.item_cost || 0}
                                    </p>
                                </div>
                                <div className="buttons">
                                    <button
                                        disabled={inputFields.length === 1}
                                        onClick={() => handleRemove(index)}
                                        className='remove_btn'
                                    >
                                        Remove
                                    </button>
                                    <button onClick={() => handleAdd()}>
                                        Add an item
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="calculate">
                            <p>Total: <span>80.000Fcfa</span></p>
                        </div>
                        <div className="notes">
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="5"
                                type="text"
                                value={Note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="Add a note"
                            />
                        </div>
                    </div>
                </div>
                <div className="submit-btn">
                    <button><FormattedMessage id="order.form.save.draft.button" defaultMessage="SAVE AS DRAFT" /></button>
                    <button type="submit"><FormattedMessage id="send.order.form.send.button" defaultMessage="SEND ORDER" /></button>
                </div>
            </form>
        </div >)
}

export default NewOrderForm