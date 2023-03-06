import React from 'react'

//import style
import '../../styles/buttons/Buttons.scss'
import './css/Items.scss'
import '../../styles/layout/Layout.scss'
import '../../styles/typography/Typography.scss'

//import components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'


const Item = () => {
    return (
        <div className="item-page layout-container">
            <Sidebar />
            <Header />
            <div className="main-container">
                <div className="page-header">
                    <h1 className="page-title">Single Item Name</h1>
                </div>
            </div>
        </div>
    )
}

export default Item