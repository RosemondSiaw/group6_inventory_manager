import React from 'react'
import './css/Settings.scss'
import '../../styles/layout/Layout.scss'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
  return (
    <div className="settings-page layout-container">
            <Sidebar />
            <Header />
            <div className="main-container">
                TODO
                Settings
            </div>
        </div>
  )
}

export default Settings