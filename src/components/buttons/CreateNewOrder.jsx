import React, { useState } from 'react'
import '../../styles/buttons/Buttons.scss'
import { Link } from 'react-router-dom';
import NewOrderForm from '../forms/NewOrderForm';

//import popup components
import Popup from '../../components/popup/Popup'

//import Language translator json files
import { FormattedMessage } from "react-intl";

//import icons from Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const AddIcon = <FontAwesomeIcon className="iconHead" icon={faPlus} />

const CreateNewOrder = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className='buttonContainer'>
            <button className='addType' onClick={() => setButtonPopup(true)}>
                <Link to="" style={{ color: "black", textDecoration: "none" }}>
                    {AddIcon} &nbsp;
                    <FormattedMessage id="orders.table.header.create.order.button" defaultMessage="Create new order" />
                </Link>
            </button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3 style={{ color: 'white', fontWeight: 'bold' }}> <FormattedMessage id="new.order.form.title" defaultMessage="Create a new order" /></h3>
                <NewOrderForm />
            </Popup>
        </div>
    )
}

export default CreateNewOrder