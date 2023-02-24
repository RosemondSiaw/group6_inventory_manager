import React from 'react'
import './css/Home.scss'
import '../../styles/layout/Layout.scss'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
    return (
        <div className="home layout-container">
            <Sidebar />
            <Header />
            <div className="main-container">
                Dashboard
            </div>
        </div>
    )
}

export default Home