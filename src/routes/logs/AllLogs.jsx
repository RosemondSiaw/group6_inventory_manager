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

const AllLogs = () => {
  return (
    <div className="all-logs layout-container">
      <Sidebar />
      <Header />
      <div className="main-container">
        <div className="all-logs-header">
          <h1>Logbook</h1>
          {/* TODO FINISH THIS PAGE  */}
          <div className="all-items-buttons">
            <span>Add a new log</span>
            <span>Download logbook</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllLogs