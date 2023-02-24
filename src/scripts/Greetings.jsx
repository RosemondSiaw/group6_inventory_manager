import React from 'react'
import { FormattedMessage } from "react-intl";

const Greetings = () => {
    let timeOfDay;
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
        timeOfDay = <FormattedMessage id="header.greetings.morning" defaultMessage="Good morning" />;
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = <FormattedMessage id="header.greetings.afternoon" defaultMessage="Good afternoon" />;
    } else {
        timeOfDay = <FormattedMessage id="header.greetings.night" defaultMessage="Good evening" />;
    }

    return (
        <span>{timeOfDay},</span>
    )
}

export default Greetings