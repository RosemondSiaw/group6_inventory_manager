import React, { useState } from 'react'
//import popup component
import Popup from '../../components/popup/Popup'

const DefaultLocation = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="default_item_button_container">
            <button className="default_item_button" onClick={() => setButtonPopup(true)}>Change default location</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3 style={{ color: 'white', fontWeight: 'bold' }}>Change default location</h3>

            </Popup>
        </div>
    )
}

export default DefaultLocation