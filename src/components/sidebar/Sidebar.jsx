//firebase authentification
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../scripts/firebase';
import './css/Sidebar.scss'
import { Link } from 'react-router-dom'

//import language tranlator jason files
import { FormattedMessage } from "react-intl";

import Logo from '../../assets/geia-logo.png'

// import fonts from FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBoxOpen, faCartShopping, faChartSimple, faGear, faRightFromBracket, faBox, faUsers, faChartPie, faTruckPlane } from '@fortawesome/free-solid-svg-icons'
const dashboardIcon = <FontAwesomeIcon className="iconHead" icon={faHouse} />
const itemsIcon = <FontAwesomeIcon className="iconHead" icon={faBoxOpen} />
const ordersIcon = <FontAwesomeIcon className="iconHead" icon={faCartShopping} />
const analyticsIcon = <FontAwesomeIcon className="iconHead" icon={faChartSimple} />
const settingsIcon = <FontAwesomeIcon className="iconHead" icon={faGear} />
const logoutIcon = <FontAwesomeIcon className="iconHead" icon={faRightFromBracket} />
const vendorsIcon = <FontAwesomeIcon className="iconHead" icon={faBox} />
const usersIcon = <FontAwesomeIcon className="iconHead" icon={faUsers} />
const reportsIcon = <FontAwesomeIcon className="iconHead" icon={faChartPie} />
const procurementIcon = <FontAwesomeIcon className="iconHead" icon={faTruckPlane} />

const Sidebar = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    }
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log(`${authUser.email} signed out successfully`)
    }).catch(error => console.log(error));
  }

  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="sidebar-title">
          <div className="sidebar-brand"> <img src={Logo} alt="logo" /> </div>
        </div>

        <ul className="sidebar-list">
          <div className="list-scroll">
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {dashboardIcon} <span><FormattedMessage id="navbar.link.home" defaultMessage="Dashboard" /></span></li>
            </Link>
            <Link to='/items' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {itemsIcon} <span><FormattedMessage id="navbar.link.items" defaultMessage="Items" /></span></li>
            </Link>
            <Link to='/users' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {usersIcon} <span><FormattedMessage id="navbar.link.users" defaultMessage="Users" /></span></li>
            </Link>
            <Link to='/vendors' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {vendorsIcon} <span><FormattedMessage id="navbar.link.vendors" defaultMessage="Vendors" /></span></li>
            </Link>
            <Link to='/orders' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {ordersIcon} <span><FormattedMessage id="navbar.link.orders" defaultMessage="Orders" /></span></li>
            </Link>
            <Link to='/procurement' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {procurementIcon} <span><FormattedMessage id="navbar.link.procurement" defaultMessage="Procurement" /></span></li>
            </Link>
            <Link to='/analytics' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {analyticsIcon} <span><FormattedMessage id="navbar.link.analytics" defaultMessage="Analytics" /></span></li>
            </Link>
            <Link to='/reports' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {reportsIcon} <span><FormattedMessage id="navbar.link.reports" defaultMessage="Reports" /></span></li>
            </Link>
            <Link to='/settings' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {settingsIcon} <span><FormattedMessage id="navbar.link.settings" defaultMessage="Settings" /></span></li>
            </Link>
          </div>
          <li className="sidebar-list-item list-item-end"> {logoutIcon} <span><button onClick={userSignOut} style={{ background: 'none', padding: '0px' }}><FormattedMessage id="navbar.link.logout" defaultMessage="Logout" /></button></span></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar