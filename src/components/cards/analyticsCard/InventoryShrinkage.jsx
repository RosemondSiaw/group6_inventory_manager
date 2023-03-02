import React from 'react'
import '../css/Cards.scss'
import Chart from '../../../assets/rating-scale.png'

const InventoryShrinkage = () => {
  return (
    <div className="inventory-shrinkage-card analytics-card-default">
      <div className="inventory-shrinkage-card-header">
        <h2>Inventory Shrinkage Analysis</h2>
      </div>
      <div className="inventory-shrinkage-card-chart scale-chart-container">
        <img src={Chart} alt="" />
      </div>
      <div className="scale-num">
        <div className="indicator"></div>
        <p className="card-num">0,2%</p>
      </div>
    </div>
  )
}

export default InventoryShrinkage