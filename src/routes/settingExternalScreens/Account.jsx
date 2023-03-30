import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../components/contexts/AuthContext';
import CloseImg from '../../assets/closeStore.png'
import pauseImg from '../../assets/pauseStore.png'
import profile from '../../assets/profilePicture.svg'
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

const Account = () => {
  const { currentUser } = useAuth()
  return (
    <div className="accountSetting layout-container">
      <Sidebar />
      <Header />
      <div className="main-container">
        <div className="account_setting_header">
          <h1>
            <FormattedMessage id="settings.account.option.title" defaultMessage="Account" />
          </h1>
        </div>
        <div className="account_overview_container">
          <div className="account_detail_title">
            <h2 className="title">Account overview</h2>
            <p className="legal">View our <Link className='external_link'>terms</Link> and <Link className='external_link'>privacy policy</Link>.</p>
          </div>
          <div className="account_overview_card_container">
            <div className="account_overview_cards">
              <div className="membership_start_date account_overview_card">
                <h2 className='account_overview_card_title'>Member since</h2>
                <p className='account_overview_card_detail'>April 2, 2023</p>
              </div>
              <div className="current_plan account_overview_card">
                <h2 className='account_overview_card_title'>Current plan</h2>
                <p className='account_overview_card_detail'>Freenium</p>
              </div>
              <div className="account_status account_overview_card">
                <h2 className='account_overview_card_title'>Account status</h2>
                <p className='account_overview_card_detail'>Active</p>
              </div>
            </div>

          </div>
        </div>
        <div className="account_and_permissions">
          <div className="account_detail_title">
            <h2 className="title">Accounts and permissions</h2>
          </div>
          <div className="account_and_permissions_container">
            <div className="account_owner_container">
              <h2 className="account_owner_title">Account owner</h2>
              <div className="account_owner_details">
                <div className="account_owner_profile_picture">
                  <img src={profile} alt="" />
                </div>
                <div className="account_owner_last_login">
                  <p className="account_owner_email"> <Link className='external_link' to="#"> {currentUser.email} </Link> </p>
                  <p className="last_login">Last login was Wednesday, March 29, 2023, 2:30 PM GMT</p>
                </div>
              </div>
            </div>
            <div className="user_account_management">
              <div className="user_account_management_header">
                <h2 className="user_account_management_header_title">Staff accounts (1 of 1)</h2>
                <div className="user_account_management_buttons">
                  <button className='logout_users_butn'>Log out of all staff acounts</button>
                  <button className='add_users'>Add staff account</button>
                </div>
              </div>
              <div className="user_account_container">
                <div className="user_account_details">
                  <div className="user_account_profile_picture"> <img src={profile} alt="" /> </div>
                  <div className="user_account_name">
                    <p className="username"> <Link className="external_link" to="#">James Kitombo</Link> </p>
                    <p className="status">Invitation sent</p>
                  </div>
                </div>
                <div className="user_access_type">
                  <p className="access_type">Full access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login_services" style={{ display: 'none' }}></div>
        <div className="inventory_status">
          <div className="account_detail_title">
            <h2 className="title">Your inventory status</h2>
          </div>
          <div className="inventory_status_container">
            <div className="pause_inventory close_pause_container">
              <img className='inventory_status_img' src={pauseImg} alt="" />
              <p className="inventory_status_text">Take a break from managing your inventory at a reduced plan price. You're settings will be paused until you ar ready to come back.</p>
              <button className="inventory_status_button">Pause Inventory</button>
            </div>
            <div className="close_inventory close_pause_container">
              <img className='inventory_status_img' src={CloseImg} alt="" />
              <p className="inventory_status_text">Turn off your inventory permanently and delete your account and all associated inventory data. This action cannot be undone.</p>
              <button className="inventory_status_button">Close Inventory</button>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default Account