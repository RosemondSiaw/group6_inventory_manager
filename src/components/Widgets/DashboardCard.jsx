import React from 'react'
import './css/Widget.scss';

const DashboardCard = ({ type }) => {
    let data;

    switch (type) {
        case "all-items":
            data = {
                title: "All items",
                count: 568,
            };
            break;
        case "in-stock":
            data = {
                title: "In stock",
                count: 130,
            };
            break;
        case "low-stock":
            data = {
                title: "Low of stock",
                count: 41,
            };
            break;
        case "out-of-stock":
            data = {
                title: "Out of stock",
                count: 0,
            };
            break;
        case "on-order":
            data = {
                title: "On order",
                count: 15,
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