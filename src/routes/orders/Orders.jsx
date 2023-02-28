import React from 'react'
import './css/Orders.scss'
import '../../styles/layout/Layout.scss'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import OrdersTable from '../../components/Tables/OrdersTable'
import DownloadOrders from '../../components/buttons/DownloadOrders'
import CreateNewOrder from '../../components/buttons/CreateNewOrder'

//import Language translator jason files
import { FormattedMessage } from "react-intl";

const Orders = () => {
  return (
    <div className="orders-page layout-container">
      <Sidebar />
      <Header />
      <div className="main-container">
        {/*
        TODO // ADD FILTERING AND SORTING
        */}
        <div className="order-page-header">
        <h1><FormattedMessage id="orders.page.header.title" defaultMessage="Orders" /></h1>
          <div className="page-buttons">
            <CreateNewOrder />
            <DownloadOrders />
          </div>
        </div>
        <div className="order-table-container">
          <OrdersTable />
        </div>
      </div>
    </div>
  )
}

export default Orders