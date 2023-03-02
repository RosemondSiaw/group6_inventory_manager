import React from 'react'
import './css/Widget.scss';

const AnalyticsWidget = ({ type }) => {
  let data;

  switch (type) {
    case "total-orders":
      data = {
        title: "Total Orders",
        count: 124,
        isMoney: false,
      };
      break;
    case "today-orders":
      data = {
        title: "Today's Orders",
        count: 13,
        isMoney: false,
      };
      break;
    case "inventory-value":
      data = {
        title: "Total Inventory Value",
        count: "50,000,000",
        isMoney: true,
      };
      break;
    case "total-deliveries":
      data = {
        title: "Total Deliveries",
        count: 23,
        isMoney: false,
      };
      break;
    case "today-deliveries":
      data = {
        title: "Today's deliveries",
        count: 5,
        isMoney: false,
      };
      break;
    default:
    // do nothing
  }
  return (
    <div className="analytics-widget-container">
      <div className="analytics-card">
        <h3>{data.title}</h3>
        <p className='num'> {data.isMoney && "XOF"} {data.count} </p>
      </div>
    </div>
  )
}

export default AnalyticsWidget