import React from 'react'

//import Language translator jason files
import { FormattedMessage } from "react-intl";

//import styles
import './css/Home.scss'
import '../../styles/layout/Layout.scss'
import '../../styles/typography/Typography.scss'
import '../../styles/colors/Colors.scss'

//import components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Card from '../../components/Widgets/DashboardCard'
// import NewLogButton from '../../components/buttons/CreateNewLog'
import LogTable from '../../components/Tables/LogTable';
import ViewAllLogs from '../../components/buttons/ViewAllLogs';

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
                        <Card type="in-stock" />
                        <Card type="low-stock" />
                        <Card type="out-of-stock" />
                        <Card type="on-order" />
                    </div>
                </div>

                <div className="table-header">
                    <h1><FormattedMessage id="dashboard.table.header.tile" defaultMessage="Items Log" /></h1>
                    <div className="dashboard-buttons">
                            <ViewAllLogs />
                    </div>
                </div>
                <div className="table-container">
                                <LogTable />
                            </div>
            </div>
        </div>
                            )
}

export default Home