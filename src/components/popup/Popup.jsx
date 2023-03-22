import React from 'react'
import './css/Popup.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const closeIcon = <FontAwesomeIcon icon={faXmark} />

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup_container'>
            <div className="popup_inner">
                <button className='close-btn' onClick={() => props.setTrigger(false)} style={{ fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}> Close {closeIcon} </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup