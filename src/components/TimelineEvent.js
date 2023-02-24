import React from "react";
import { v4 as uuid } from 'uuid';
import { FaDotCircle } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti'

const TimelineEvent = (props) => {

    const {description, date} = props.event;

    return (
        <div className="timeline__event">
            <p className='date-invisible'>{date}</p>
            < TiArrowSortedDown className='arrow__icon'/>
            <p>{description}</p>
        </div>
    )
}

export default TimelineEvent;