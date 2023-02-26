import React from 'react'
import './css/Items.scss'
import '../../styles/layout/Layout.scss'
import '../../styles/typography/Typography.scss'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import AllItemsTable from '../../components/Tables/AllItemsTable'
import AddNewItem from '../../components/buttons/AddNewItem'
import DownloadAllItems from '../../components/buttons/DownloadAllItems'

//import Language translator jason files
import { FormattedMessage } from "react-intl";

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