import React from 'react'
import '../../styles/buttons/Buttons.scss'
import { Link } from 'react-router-dom';

//import Language translator jason files
import { FormattedMessage } from "react-intl";

//import icons from Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
const DownloadIcon = <FontAwesomeIcon className="iconHead" icon={faCloud} />

const DownloadLoagbook = () => {
  return (
    <div className='buttonContainer'>
      <button>
        <Link to="" style={{ color: "black", textDecoration: "none" }}>
          {DownloadIcon} &nbsp;
          <FormattedMessage id="log.table.header.download.logbook.button" defaultMessage="Download logbook" />
        </Link>
      </button>
    </div>
  )
}

export default DownloadLoagbook