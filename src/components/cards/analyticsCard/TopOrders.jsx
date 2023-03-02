import React from 'react'
import '../css/Cards.scss'

const TopOrders = () => {
  return (
    <div className="top-orders-card analytics-card-default">
      <div className="top-orders-card-header">
        <h2>Top Ordered</h2>
      </div>

      <div className="top-orders-card-list">
        <ol>
          <li>Honeywell Surgical Mask</li>
          <li>Angio Dynamics IV Catheters</li>
          <li>Hatman Gauze</li>
          <li>Medline Gloves</li>
          <li>Covidien Syringes</li>
        </ol>
      </div>
    </div>)
}

export default TopOrders