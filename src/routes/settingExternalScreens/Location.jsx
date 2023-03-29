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

const Location = () => {
  return (
    <div className="locationSetting layout-container">
      <Sidebar />
      <Header />
      <div className="main-container">
        <div className="locationSetting-header">
          <h1>
            <FormattedMessage id="settings.location.option.title" defaultMessage="Location" />
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Location