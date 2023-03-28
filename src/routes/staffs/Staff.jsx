import React from 'react'

//import style
import '../../styles/buttons/Buttons.scss'
import './css/Staff.scss'
import '../../styles/layout/Layout.scss'
import '../../styles/typography/Typography.scss'

//import components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import UsersTable from '../../components/Tables/StaffsTable';

//import Language translator jason files
import { FormattedMessage } from "react-intl";
import AddNewStaff from '../../components/buttons/AddNewStaff'
import DownloadUsersList from '../../components/buttons/DownloadUsersList'

const Users = () => {
    return (
        <div className="users-page layout-container">
            <Sidebar />
            <Header />
            <div className="main-container">
                <div className="page-header">
                    <h1 className="page-title"><FormattedMessage id="users.page.header.title" defaultMessage="Users" /></h1>
                    <div className="page-buttons">
                        <AddNewStaff />
                        <DownloadUsersList />
                    </div>
                </div>
                <div>
                    <UsersTable />
                </div>
            </div>
        </div>
    )
}

export default Users