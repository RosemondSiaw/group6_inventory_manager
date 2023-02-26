import React from 'react'
import '../../styles/buttons/Buttons.scss'
import { Link } from 'react-router-dom';

//import Language translator jason files
import { FormattedMessage } from "react-intl";

//import icons from Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
const AddIcon = <FontAwesomeIcon className="iconHead" icon={faBook} />

const ViewAllLogs = () => {
    return (
        <div className='buttonContainer'>
            <button className='addType'>
                <Link to="/logs" style={{color: "black", textDecoration: "none"}}>
                    {AddIcon} &nbsp;
                    <FormattedMessage id="dashboard.table.header.view.all.logs" defaultMessage="View logbook" />
                </Link>
            </button>
        </div>
    )
}

export default ViewAllLogs