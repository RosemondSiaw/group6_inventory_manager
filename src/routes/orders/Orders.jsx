import React from 'react'
import './css/Orders.scss'
import '../../styles/layout/Layout.scss'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'


const Orders = () => {
  return (
    <div className="orders-page layout-container">
      <Sidebar />
      <Header />
      <div className="main-container">
        TODO
        Orders
      </div>
    </div>
  )
}

export default Orders