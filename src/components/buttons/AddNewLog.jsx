import React from 'react'
import '../../styles/buttons/Buttons.scss'
import { Link } from 'react-router-dom';

//import Language translator json files
import { FormattedMessage } from "react-intl";

//import icons from Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const AddIcon = <FontAwesomeIcon className="iconHead" icon={faPlus} />

const AddNewLog = () => {
  return (
    <div className='buttonContainer'>
      <button className='addType'>
        <Link to="" style={{ color: "black", textDecoration: "none" }}>
          {AddIcon} &nbsp;
          <FormattedMessage id="logbook.table.header.add.log.button" defaultMessage="Add new item" />
        </Link>
      </button>
    </div>
  )
}

export default AddNewLog