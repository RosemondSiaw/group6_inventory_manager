import React from 'react'
import { Link } from 'react-router-dom';

//import style
import '../../styles/buttons/Buttons.scss'
import './css/Items.scss'
import '../../styles/layout/Layout.scss'
import '../../styles/typography/Typography.scss'

//import components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import AllItemsTable from '../../components/Tables/AllItemsTable'
import AddNewItem from '../../components/buttons/AddNewItem'
import DownloadAllItems from '../../components/buttons/DownloadAllItems'

//import Language translator jason files
import { FormattedMessage } from "react-intl";

//import icons from Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
const AddIcon = <FontAwesomeIcon className="iconHead" icon={faBook} />

const Items = () => {
  return (
    <div className="items-page layout-container">
      <Sidebar />
      <Header />
      <div className="main-container">
        <div className="page-header">
          <h1 className="page-title"><FormattedMessage id="items.table.header.title" defaultMessage="All Items" /></h1>
          <div className="page-buttons">
            <AddNewItem />
            <DownloadAllItems />
            <div className='buttonContainer'>
              <button className='addType'>
                <Link to="logs" style={{ color: "black", textDecoration: "none" }}>
                  {AddIcon} &nbsp;
                  <FormattedMessage id="dashboard.table.header.view.all.logs" defaultMessage="View logbook" />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          <AllItemsTable />
        </div>
      </div>
    </div>
  )
}

export default Items