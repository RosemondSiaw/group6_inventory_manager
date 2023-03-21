import React from 'react'

//import style
import '../../styles/buttons/Buttons.scss'
import './css/Vendors.scss'
import '../../styles/layout/Layout.scss'
import '../../styles/typography/Typography.scss'

//import components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import VendorsTable from '../../components/Tables/VendorsTable'

//import Language translator jason files
import { FormattedMessage } from "react-intl";
import AddNewVendor from '../../components/buttons/AddNewVendor'
import DownloadVendorsList from '../../components/buttons/DownloadVendorsList'

const Vendors = () => {
    return (
        <div className="vendors-page layout-container">
            <Sidebar />
            <Header />
            <div className="main-container">
                <div className="page-header">
                    <h1 className="page-title"><FormattedMessage id="vendors.page.header.title" defaultMessage="Vendors" /></h1>
                    <div className="page-buttons">
                        <AddNewVendor />
                        <DownloadVendorsList />
                    </div>
                </div>
                <div className="vendors-table-container">
                    <VendorsTable />
                </div>
            </div>
        </div>
    )
}

export default Vendors