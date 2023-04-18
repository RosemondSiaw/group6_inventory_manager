import React, { useState } from 'react'
import '../../styles/buttons/Buttons.scss'

//import popup component
import Popup from '../../components/popup/Popup'

//import Language translator json files
import { FormattedMessage } from "react-intl";

const AddUser = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div>
            <button className='add_users' onClick={() => setButtonPopup(true)}>
            Add a new user
            </button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3 style={{ color: 'white', fontWeight: 'bold' }}>Add a new user</h3>
                
            </Popup>
        </div>
    )
}

export default AddUser