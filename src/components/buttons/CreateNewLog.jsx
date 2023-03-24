import React from 'react'
import '../../styles/buttons/Buttons.scss'

//import Language translator json files
import { FormattedMessage } from "react-intl";

//import icons from Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const AddIcon = <FontAwesomeIcon className="iconHead" icon={faPlus} />

const CreateNewLog = () => {
    return (
        <div className='buttonContainer'>
            <button className='addType'>{AddIcon} &nbsp;<FormattedMessage id="dashboard.table.header.button" defaultMessage="Create a log" /></button>
        </div>
    )
}

export default CreateNewLog