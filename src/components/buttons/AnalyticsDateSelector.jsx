import React from 'react'
import '../../styles/buttons/Buttons.scss';


// this button is styled in the buttons.scss file
const AnalyticsDateSelector = () => {
    return (
        <div className="analytics-date-selector">
            <span>Last 90 days:</span>
            <input type="date" name="" id="" />
        </div>
    )
}

export default AnalyticsDateSelector