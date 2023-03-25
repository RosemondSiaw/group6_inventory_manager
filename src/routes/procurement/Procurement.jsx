import React from 'react'

//import Language translator jason files
import { FormattedMessage } from "react-intl";

//import styles
import './css/Procurement.scss'
import '../../styles/layout/Layout.scss'
import '../../styles/typography/Typography.scss'
import '../../styles/colors/Colors.scss'

//import components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import ProcurementTable from '../../components/Tables/ProcurementTable';
import CreateSupplyOrder from '../../components/buttons/CreateSupplyOrder';
import DownloadSupplyOrders from '../../components/buttons/DownloadSupplyOrders';

const Procurement = () => {
    return (
        <div className="procurements-page layout-container">
            <Sidebar />
            <Header />
            <div className="main-container">
                <div className="procurement-header">
                    <h1><FormattedMessage id="procurement.page.header" defaultMessage="Procurement" /></h1>
                    {/* TODO FINISH THIS PAGE  */}
                    <div className="page-buttons">
                        <CreateSupplyOrder />
                        <DownloadSupplyOrders />
                    </div>
                </div>
                <div className="procurement-table">
                    <ProcurementTable />
                </div>
            </div>
        </div>)
}

export default Procurement