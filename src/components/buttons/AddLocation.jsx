import React, { useState } from 'react'
import '../../styles/buttons/Buttons.scss'
import { Link } from 'react-router-dom';

//import popup components
import Popup from '../../components/popup/Popup'

//import Language translator json files
import { FormattedMessage } from "react-intl";

//import icons from Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NewLocationForm from '../forms/NewLocationForm';
const AddIcon = <FontAwesomeIcon className="iconHead" icon={faPlus} />
const AddLocation = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className='buttonContainer'>
            <button className='addType' onClick={() => setButtonPopup(true)}>
                <Link to="" style={{ color: "black", textDecoration: "none" }}>
                    {AddIcon} &nbsp;
                    Add a new location
                </Link>
            </button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3 style={{ color: 'white', fontWeight: 'bold' }}>Add a new location</h3>
                <NewLocationForm />
            </Popup>
        </div>)
}

export default AddLocation