import React, { useState } from 'react'
import '../../styles/buttons/Buttons.scss'
import { Link } from 'react-router-dom';

//import popup components
import Popup from '../../components/popup/Popup'

//import Language translator jason files
import { FormattedMessage } from "react-intl";

//import icons from Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NewSupplyOrderForm from '../forms/NewSupplyOrderForm';
const AddIcon = <FontAwesomeIcon className="iconHead" icon={faPlus} />

const CreateSupplyOrder = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className='buttonContainer'>
            <button className='addType' onClick={() => setButtonPopup(true)}>
                <Link to="" style={{ color: "black", textDecoration: "none" }}>
                    {AddIcon} &nbsp;
                    <FormattedMessage id="procurement.table.header.create.supply.order.button" defaultMessage="Create new supply order" />
                </Link>
            </button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3 style={{ color: 'white', fontWeight: 'bold' }}> <FormattedMessage id="new.supply.order.form.title" defaultMessage="Create a new supply order" /></h3>
                <NewSupplyOrderForm />
            </Popup>
        </div>
    )
}

export default CreateSupplyOrder