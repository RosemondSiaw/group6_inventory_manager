import React, { useState, useEffect } from 'react';
import { FormattedDate, FormattedTime } from "react-intl";

const DateTime = () => {
    // eslint-disable-next-line no-unused-vars
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);
    return (
        <div className="container">
            <p>{' '}
                <FormattedDate
                    weekday='long'
                    day='numeric'
                    month='long'
                    year='numeric'
                />, &nbsp; <span> <FormattedTime
                    hour='numeric'
                    minute='numeric'
                /> </span></p>
        </div>
    )
}

export default DateTime