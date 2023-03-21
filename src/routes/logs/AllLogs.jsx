import React from 'react'

//import Language translator jason files
import { FormattedMessage } from "react-intl";

//import styles
import './css/Logs.scss'
import '../../styles/layout/Layout.scss'
import '../../styles/typography/Typography.scss'
import '../../styles/colors/Colors.scss'

//import components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
// import AddNewLog from '../../components/buttons/AddNewLog';
import DownloadLoagbook from '../../components/buttons/DownloadLoagbook';
import AllLogsTable from '../../components/Tables/AllLogsTable';

const AllLogs = () => {
  return (
    <div className="all-logs layout-container">
      <Sidebar />
      <Header />
      <div className="main-container">
        <div className="all-logs-header">
          <h1><FormattedMessage id="logbook.page.header" defaultMessage="Logbook" /></h1>
          {/* TODO FINISH THIS PAGE  */}
          <div className="all-items-buttons">
            <DownloadLoagbook />
          </div>
        </div>
        <div className="logbook-table">
          <AllLogsTable />
        </div>
      </div>
    </div>
  )
}

export default AllLogs