import React from 'react'
import '../css/Cards.scss'
import Chart from '../../../assets/rating-scale.png'

const StockoutRate = () => {
  return (
    <div className="stockout-rate-card analytics-card-default">
      <div className="stockout-rate-card-header">
        <h2>Stockout Rate</h2>
      </div>
      <div className="stockout-rate-card-chart scale-chart-container">
        <img src={Chart} alt="" />
      </div>
      <div className="scale-num">
        <div className="indicator"></div>
        <p className="card-num">8%</p>
      </div>
    </div>)
}

export default StockoutRate