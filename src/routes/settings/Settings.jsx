import React from 'react'
import { Link } from 'react-router-dom'
import './css/Settings.scss'
import '../../styles/layout/Layout.scss'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

import { FormattedMessage } from 'react-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faPaperclip, faUser, faFileInvoiceDollar, faTruckFast, faMapLocation } from '@fortawesome/free-solid-svg-icons'
const settingIcon = <FontAwesomeIcon claName="icon" icon={faGear} />
const FileIcon = <FontAwesomeIcon icon={faPaperclip} />
const AccountIcon = <FontAwesomeIcon icon={faUser} />
const BillingIcon = <FontAwesomeIcon icon={faFileInvoiceDollar} />
const ShippingIcon = <FontAwesomeIcon icon={faTruckFast} />
const LocationIcon = <FontAwesomeIcon icon={faMapLocation} />

const Settings = () => {
  return (
    <div className="settings-page layout-container">
      <Sidebar />
      <Header />
      <div className="main-container">
        <div className="settings-header">
          <h1><FormattedMessage id="settings.screen.header.title" defaultMessage="Settings" /></h1>
        </div>
        <div className="settings_card_container">
          <div className="cards_container">
            <div className="card">
              <div className="container">
                <div className="left_container">
                  <div className="icon_container">
                    {settingIcon}
                  </div>
                </div>
                <div className="right_container">
                  <Link to="general" style={{ textDecoration: 'none', color: '#1F8A70', fontWeight: 'bold', fontSize: '16px' }}>General</Link>
                  <p>View and update your details.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="container">
                <div className="left_container">
                  <div className="icon_container">
                    {ShippingIcon}
                  </div>
                </div>
                <div className="right_container">
                  <Link to="general" style={{ textDecoration: 'none', color: '#1F8A70', fontWeight: 'bold', fontSize: '16px' }}>Shipping</Link>
                  <p>Manage how you ship to customers.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="container">
                <div className="left_container">
                  <div className="icon_container">
                    {LocationIcon}
                  </div>
                </div>
                <div className="right_container">
                  <Link to="general" style={{ textDecoration: 'none', color: '#1F8A70', fontWeight: 'bold', fontSize: '16px' }}>Location</Link>
                  <p>Manage the places you store your inventory</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="container">
                <div className="left_container">
                  <div className="icon_container">
                    {FileIcon}
                  </div>
                </div>
                <div className="right_container">
                  <Link to="files" style={{ textDecoration: 'none', color: '#1F8A70', fontWeight: 'bold', fontSize: '16px' }}>File</Link>
                  <p>Upload documents and images.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="container">
                <div className="left_container">
                  <div className="icon_container">
                    {AccountIcon}
                  </div>
                </div>
                <div className="right_container">
                  <Link to="account" style={{ textDecoration: 'none', color: '#1F8A70', fontWeight: 'bold', fontSize: '16px' }}>Account</Link>
                  <p>Manage your account and permissions.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="container">
                <div className="left_container">
                  <div className="icon_container">
                    {BillingIcon}
                  </div>
                </div>
                <div className="right_container">
                  <Link to="billing" style={{ textDecoration: 'none', color: '#1F8A70', fontWeight: 'bold', fontSize: '16px' }}>Billing</Link>
                  <p>Manage your billing information and view your invoices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings