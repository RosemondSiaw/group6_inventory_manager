import React from 'react'
import '../../styles/buttons/Buttons.scss'
import { Link } from 'react-router-dom';

//import Language translator package
import { FormattedMessage } from "react-intl";

//import icons from Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
const DownloadIcon = <FontAwesomeIcon className="iconHead" icon={faCloud} />

const DownloadVendorsList = () => {
    return (
        <div className='buttonContainer'>
            <button>
                <Link to="" style={{ color: "black", textDecoration: "none" }}>
                    {DownloadIcon} &nbsp;
                    <FormattedMessage id="vendors.table.header.download.vendors.button" defaultMessage="Download vendors' list" />
                </Link>
            </button>
        </div>
    )
}

export default DownloadVendorsList