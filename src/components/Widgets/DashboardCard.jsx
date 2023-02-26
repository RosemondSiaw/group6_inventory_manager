import React from 'react'
import './css/Widget.scss';

const DashboardCard = ({ type }) => {
    let data;

    switch (type) {
        case "all-items":
            data = {
                title: "All Items",
                count: 1532,
            };
            break;
        case "out-of-stock":
            data = {
                title: "Out of stock",
                count: 0,
            };
            break;
        case "overstock":
            data = {
                title: "Overstock",
                count: 1,
            };
            break;
        default:
        // do nothing
    }

    return (
        <div className="statCardContainer">
            <div className="statCard">
                <h3> {data.title} </h3>
                <p className="num"> {data.count} </p>
            </div>
        </div>
    )
}

export default DashboardCard