import React from 'react'
import './css/Orders.scss'
import '../../styles/layout/Layout.scss'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

//import Language translator jason files
import { FormattedMessage } from "react-intl";

const SingleOrder = () => {
    return (
        <div className="order-single-page layout-container">
            <Sidebar />
            <Header />
            <div className="main-container">
                <div className="order-single-page-header">
                    <h1><FormattedMessage id="order.single.page.header.title" defaultMessage="Order ID" /></h1>
                </div>
            </div>
        </div>)
}

export default SingleOrder