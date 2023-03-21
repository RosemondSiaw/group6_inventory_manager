import React from 'react'
import '../../styles/buttons/Buttons.scss'
import { Link } from 'react-router-dom';

//import Language translator jason files
import { FormattedMessage } from "react-intl";

//import icons from Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
const AddIcon = <FontAwesomeIcon className="iconHead" icon={faCloud} />

const DownloadSupplyOrders = () => {
    return (
        <div className='buttonContainer'>
            <button>
                <Link to="" style={{ color: "black", textDecoration: "none" }}>
                    {AddIcon} &nbsp;
                    <FormattedMessage id="procurement.table.header.download.button" defaultMessage="Download list of supply orders" />
                </Link>
            </button>
        </div>)
}

export default DownloadSupplyOrders