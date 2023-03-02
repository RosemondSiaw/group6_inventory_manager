import React from 'react'
import '../css/Cards.scss'
import Chart from '../../../assets/rating-scale.png'

const InventoryTurnover = () => {
  return (
    <div className="inventory-turnover-card analytics-card-default">
      <div className="available-items-card-header">
        <h2>Inventory Turnover Ratio</h2>
      </div>
      <div className="inventory-turnover-card-chart scale-chart-container">
        <img src={Chart} alt="" />
      </div>
      <div className="scale-num">
        <div className="indicator"></div>
        <p className="card-num">1,5%</p>
      </div>
    </div>)
}

export default InventoryTurnover