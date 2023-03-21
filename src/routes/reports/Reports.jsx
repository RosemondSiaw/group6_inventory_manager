import React from 'react'

//import style
import '../../styles/buttons/Buttons.scss'
import './css/Reports.scss'
import '../../styles/layout/Layout.scss'
import '../../styles/typography/Typography.scss'

//import components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

//import Language translator jason files
import { FormattedMessage } from "react-intl";
import CreateNewReport from '../../components/buttons/CreateNewReport'
import Report from '../../components/cards/reportsCard/Report'
import Data from '../../components/cards/reportsCard/ReportData'

const Reports = () => {
  return (
    <>
      <div className="reports-page layout-container">
        <Sidebar />
        <Header />
        <div className="main-container">
          <div className="page-header">
            <h1 className="page-title"><FormattedMessage id="reports.page.header.title" defaultMessage="My Reports" /></h1>
            <div className="page-buttons">
              <CreateNewReport />
            </div>
          </div>
          <div className="reports-container">
            <Report details={Data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Reports