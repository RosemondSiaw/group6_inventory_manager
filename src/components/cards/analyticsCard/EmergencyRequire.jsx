import React from 'react'
import '../css/Cards.scss'

const EmergencyRequire = () => {
    return (
        <div className="emergency-require-card analytics-card-default">
            <div className="emergency-require-card-header">
                <h2>Emergency Require Item List</h2>
                {/*
                    TODO ADD FILTER: Quantity less thsn x% of min level
                */}
            </div>
            <div className="emergency-require-item-list">
                <ol>
                    <li className="item-list">
                        <div className='item'>Item name <span className='item-quantity'>150 units</span></div>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default EmergencyRequire