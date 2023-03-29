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
import AddLocation from '../../components/buttons/AddLocation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
const LocationIcon = <FontAwesomeIcon className='iconLocation' icon={faLocationDot} />

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
          <div className="locationBtn">
            <AddLocation />
          </div>
        </div>
        <div className="location_explained">
          <p>Manage the places where you stock inventory and fulfill staff orders. {/* You're using 3 of 8 locations available om your plan.*/}</p>
        </div>
        <div className="location_items_container">
          <h2 className='location_items_container_title'>Your Locations</h2>

          <div className="location_items">
            <div className="locationItem">
              <div className="icon_container">
                <div className="icon"> {LocationIcon} </div>
              </div>
              <div className="location_details">
                <div className="location_details_header">
                  <h2 className='title'>Location 1</h2>
                  <div className="default">Default</div>
                </div>
                <p className='address'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae, adipisci blanditiis velit quaerat quam?</p>
              </div>
            </div>
            <div className="locationItem">
              <div className="icon_container">
                <div className="icon"> {LocationIcon} </div>
              </div>
              <div className="location_details">
                <div className="location_details_header">
                  <h2 className='title'>Location 2</h2>
                  <div className="default" style={{ display: 'none' }}>Default</div>
                </div>
                <p className='address'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae, adipisci blanditiis velit quaerat quam?</p>
              </div>
            </div>
            <div className="locationItem">
              <div className="icon_container">
                <div className="icon"> {LocationIcon} </div>
              </div>
              <div className="location_details">
                <div className="location_details_header">
                  <h2 className='title'>Location 3</h2>
                  <div className="default" style={{ display: 'none' }}>Default</div>
                </div>
                <p className='address'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae, adipisci blanditiis velit quaerat quam?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="default_item_selector">
          <div className="default_item_container">
            <h2 className='location_items_container_title'>Default Location</h2>
            <p>Choose which location is used by Geia when no other location is specified.</p>
            <div className="default_item_button">
              <button>Change default location</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location