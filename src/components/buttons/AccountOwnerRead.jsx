import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../components/contexts/AuthContext';
//import popup component
import Popup from '../../components/popup/Popup'


const AccountOwnerRead = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    const { currentUser } = useAuth()

    return (
        <div className="AccountOwnerContainer">
            <p className="account_owner_email"> <Link className='external_link' onClick={() => setButtonPopup(true)}> {currentUser.email} </Link> </p>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3 style={{ color: 'white', fontWeight: 'bold' }}>My Account</h3>
                
            </Popup>
        </div>
    )
}

export default AccountOwnerRead