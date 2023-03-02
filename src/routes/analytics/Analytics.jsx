import React from 'react'
import './css/Analytics.scss'
import '../../styles/layout/Layout.scss'
import '../../styles/typography/Typography.scss'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import AnalyticsWidget from '../../components/Widgets/AnalyticsWidget'

//import cards
import AvailableItems from '../../components/cards/analyticsCard/AvailableItems'
import EmergencyRequire from '../../components/cards/analyticsCard/EmergencyRequire'
import InventoryTurnover from '../../components/cards/analyticsCard/InventoryTurnover'
import InventoryShrinkage from '../../components/cards/analyticsCard/InventoryShrinkage'
import StockoutRate from '../../components/cards/analyticsCard/StockoutRate'
import TopOrders from '../../components/cards/analyticsCard/TopOrders'
import AnalyticsDateSelector from '../../components/buttons/AnalyticsDateSelector'

//import Language translator jason files
import { FormattedMessage } from "react-intl";

const Analytics = () => {
  return (
    <div className="analytics-page layout-container">
      <Sidebar />
      <Header />
      <div className="main-container">
        <div className="analytics-header">
          <h1><FormattedMessage id="analytics.page.header.title" defaultMessage="Analytics" /></h1>

          <AnalyticsDateSelector />
        </div>
        <div className="global-analytics-report">
          <AnalyticsWidget type="total-orders" />
          <AnalyticsWidget type="today-orders" />
          <AnalyticsWidget type="inventory-value" />
          <AnalyticsWidget type="total-deliveries" />
          <AnalyticsWidget type="today-deliveries" />
        </div>
        <div className="detailed-analytics-report">
          <div className="analytics-cards-container">
            <div className="analytics-cards-container-top">
              <div className="available-items-container">
                <AvailableItems />
              </div>
              <div className="top-orders-container">
                <TopOrders />
              </div>
              <div className="emergency-require-item-list-container">
                <EmergencyRequire />
              </div>
            </div>
            <div className="analytics-cards-container-bottom">
              <div className="inventory-shrinkage-analysis-container">
                <InventoryShrinkage />
              </div>
              <div className="inventory-turnover-container">
                <InventoryTurnover />
              </div>
              <div className="stockout-rate-container">
                <StockoutRate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics