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

const Shipping = () => {
  return (
    <div className="shippingSetting layout-container">
      <Sidebar />
      <Header />
      <div className="main-container">
        <div className="shippingSetting-header">
          <h1>
            <FormattedMessage id="settings.shipping.option.title" defaultMessage="Shipping" />
          </h1>
        </div>

        <p className="shipping_header_text">Manage how staff receive their orders.</p>

        <div className="shipping_container">
          <div className="delivery">
            <div className="delivery_header">
              <h2 className="delivery_title">Local delivery</h2>
              <p className="delivery_explained">Deliver directly to local staff members.</p>
            </div>
            <div className="delivery_location">
              <h2 className="delivery_location_header">MANAGE DELIVERY BY LOCATION</h2>
              <div className="delivery_location_card">
                <div className="delivery_location_icon">icon</div>
                <div className="delivery_location_details_container">
                  <div className="delivery_location_details">
                  <p className="delivery_location_name">Lorem ipsum dolor.</p>
                  <p className="delivery_location_address">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit!</p>
                  </div>
                  <span className="tag">Doesn't offer delivery</span>
                </div>
                <div className="delivery_manage_button">
                  <button className='manage_delivery'>Manage</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pickup_container">
          <div className="delivery">
            <div className="delivery_header">
              <h2 className="delivery_title">Local pickup</h2>
              <p className="delivery_explained">Allow local staff members to pick up their orders.</p>
            </div>
            <div className="delivery_location">
              <h2 className="delivery_location_header">MANAGE PICKUP BY LOCATION</h2>
              <div className="delivery_location_card">
                <div className="delivery_location_icon">icon</div>
                <div className="delivery_location_details_container">
                  <div className="delivery_location_details">
                  <p className="delivery_location_name">Lorem ipsum dolor.</p>
                  <p className="delivery_location_address">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit!</p>
                  </div>
                  <span className="tag">Doesn't offer delivery</span>
                </div>
                <div className="delivery_manage_button">
                  <button className='manage_delivery'>Manage</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default Shipping