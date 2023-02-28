import React from 'react'
import '../../styles/buttons/Buttons.scss'
import { Link } from 'react-router-dom';

//import Language translator jason files
import { FormattedMessage } from "react-intl";

//import icons from Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
const DownloadIcon = <FontAwesomeIcon className="iconHead" icon={faCloud} />

const DownloadOrders = () => {
    return (
        <div className='buttonContainer'>
            <button>
                <Link to="" style={{ color: "black", textDecoration: "none" }}>
                    {DownloadIcon} &nbsp;
                    <FormattedMessage id="orders.table.header.download.orders.button" defaultMessage="Download orders" />
                </Link>
            </button>
        </div>
    )
}

export default DownloadOrders