import React from 'react'
import './css/Sidebar.scss'
import { Link } from 'react-router-dom'

import Logo from '../../assets/geia-logo.png'

// import fonts from FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBoxOpen, faCartShopping, faChartSimple, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
const dashboardIcon = <FontAwesomeIcon className="iconHead" icon={faHouse} />
const itemsIcon = <FontAwesomeIcon className="iconHead" icon={faBoxOpen} />
const ordersIcon = <FontAwesomeIcon className="iconHead" icon={faCartShopping} />
const analyticsIcon = <FontAwesomeIcon className="iconHead" icon={faChartSimple} />
const settingsIcon = <FontAwesomeIcon className="iconHead" icon={faGear} />
const logoutIcon = <FontAwesomeIcon className="iconHead" icon={faRightFromBracket} />

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="sidebar-title">
          <div className="sidebar-brand"> <img src={Logo} alt="logo" /> </div>
        </div>

        <ul className="sidebar-list">
          <div className="list-scroll">
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {dashboardIcon} <span>Dashboard</span></li>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {itemsIcon} <span>Items</span></li>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {ordersIcon} <span>Orders</span></li>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {analyticsIcon} <span>Analytics</span></li>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {settingsIcon} <span>Settings</span></li>
            </Link>
          </div>
          <li className="sidebar-list-item list-item-end"> {logoutIcon} <span>Logout</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar