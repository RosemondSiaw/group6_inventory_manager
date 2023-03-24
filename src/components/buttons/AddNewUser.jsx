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
import NewUserForm from '../forms/NewUserForm';
const AddIcon = <FontAwesomeIcon className="iconHead" icon={faPlus} />

const AddNewUser = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className='buttonContainer'>
            <button className='addType' onClick={() => setButtonPopup(true)}>
                <Link to="" style={{ color: "black", textDecoration: "none" }}>
                    {AddIcon} &nbsp;
                    <FormattedMessage id="users.table.header.add.user.button" defaultMessage="Add new user" />
                </Link>
            </button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3 style={{ color: 'white', fontWeight: 'bold' }}><FormattedMessage id="new.user.form.title" defaultMessage="Create a new user " /></h3>
                <NewUserForm />
            </Popup>
        </div>
    )
}

export default AddNewUser