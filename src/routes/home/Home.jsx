import React from 'react'
import './css/Home.scss'
import '../../styles/layout/Layout.scss'
import '../../styles/typography/Typography.scss'
import '../../styles/colors/Colors.scss'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Card from '../../components/Widgets/DashboardCard'

//import Language translator jason files
import { FormattedMessage } from "react-intl";

const Home = () => {
    return (
        <div className="home layout-container">
            <Sidebar />
            <Header />
            <div className="main-container">
                <div className="dashboardCardContainer">
                    <h1><FormattedMessage id="dashboard.stat.header" defaultMessage="Today's statistics" /></h1>

                    <div className="dashboardCards">
                        <Card type="all-items" />
                        <Card type="out-of-stock" />
                        <Card type="overstock" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home