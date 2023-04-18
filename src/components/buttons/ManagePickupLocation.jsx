import React, { useState } from 'react'
import '../../styles/buttons/Buttons.scss'
import Popup from '../../components/popup/Popup'

//import Language translator json files
import { FormattedMessage } from "react-intl";
import LocalDeliveryForm from '../forms/LocalDeliveryForm';

const ManagePickupLocation = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="buttonContainer" >
            <button className="manage_delivery" onClick={() => setButtonPopup(true)}>Manage</button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3 style={{ color: 'white', fontWeight: 'bold' }}>Manage pickup location</h3>
                <LocalDeliveryForm />
            </Popup>
        </div>)
}

export default ManagePickupLocation