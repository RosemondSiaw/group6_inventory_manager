import React from 'react'
import './css/Items.scss'
import '../../styles/layout/Layout.scss'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

const Items = () => {
  return (
    <div className="items-page layout-container">
      <Sidebar />
      <Header />
      <div className="main-container">
        TODO
        Items
      </div>
    </div>
  )
}

export default Items