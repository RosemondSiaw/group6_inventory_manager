import React from 'react'
import './css/Sidebar.scss'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="sidebar-title">
          <div className="sidebar-brand"> <img src alt="logo" /> </div>
        </div>

        <ul className="sidebar-list">
          <div className="list-scroll">
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {} <span>Dashboard</span></li>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {} <span>Items</span></li>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {} <span>Orders</span></li>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {} <span>Analytics</span></li>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li className="sidebar-list-item"> {} <span>Settings</span></li>
            </Link>
          </div>
          <li className="sidebar-list-item list-item-end"> {} <span>Logout</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar