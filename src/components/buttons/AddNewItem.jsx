import React, { useState } from 'react'
import '../../styles/buttons/Buttons.scss'
import { Link } from 'react-router-dom';

//import popup components
import Popup from '../../components/popup/Popup'

//import Language translator jason files
import { FormattedMessage } from "react-intl";

//import icons from Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NewItemForm from '../forms/NewItemForm';
const AddIcon = <FontAwesomeIcon className="iconHead" icon={faPlus} />

const AddNewItem = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className='buttonContainer'>
      <button className='addType' onClick={() => setButtonPopup(true)}>
        <Link to="" style={{ color: "black", textDecoration: "none" }}>
          {AddIcon} &nbsp;
          <FormattedMessage id="items.table.header.add.item.button" defaultMessage="Add new item" />
        </Link>
      </button>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 style={{ color: 'white', fontWeight: 'bold' }}><FormattedMessage id="new.item.form.title" defaultMessage="Add a new item" /></h3>
        <NewItemForm />
      </Popup>
    </div>
  )
}

export default AddNewItem