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
import NewVendorForm from '../forms/NewVendorForm';
const AddIcon = <FontAwesomeIcon className="iconHead" icon={faPlus} />

const AddNewVendor = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className='buttonContainer'>
      <button className='addType' onClick={() => setButtonPopup(true)}>
        <Link to="" style={{ color: "black", textDecoration: "none" }}>
          {AddIcon} &nbsp;
          <FormattedMessage id="vendors.table.header.add.vendor.button" defaultMessage="Add new vendor" />
        </Link>
      </button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 style={{ color: 'white', fontWeight: 'bold' }}> <FormattedMessage id="new.vendor.form.title" defaultMessage="Create a new vendor" /></h3>
        <NewVendorForm />
      </Popup>
    </div>
  )
}

export default AddNewVendor