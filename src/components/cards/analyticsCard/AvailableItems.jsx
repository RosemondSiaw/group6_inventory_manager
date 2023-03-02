import React from 'react'
import '../css/Cards.scss'
import Chart from '../../../assets/Available-item-chart.png'
const AvailableItems = () => {
  return (
    <div className="available-items-card analytics-card-default">
      <div className="available-items-card-header">
        <h2>Available Items</h2>
      </div>
      <div className="available-items-chart">
        <img src={Chart} alt="" />
      </div>
      <div className="available-items-card-num">
        <p className="card-num">3,134</p>
        <span>total items</span>
      </div>
    </div>
  )
}

export default AvailableItems