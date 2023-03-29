import React from 'react'

//import Language translator jason files
import { FormattedMessage } from "react-intl";

//import styles
import './css/otherSettings.scss'
import '../../styles/layout/Layout.scss'
import '../../styles/typography/Typography.scss'
import '../../styles/colors/Colors.scss'

//import components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

const Billing = () => {
  return (
    <div className="billingSettings layout-container">
      <Sidebar />
      <Header />
      <div className="main-container">
        <div className="billingSetting-header">
          <h1>
            <FormattedMessage id="settings.billing.option.title" defaultMessage="Billing" />
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Billing