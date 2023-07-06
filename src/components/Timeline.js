import React from "react";
import { v4 as uuid } from 'uuid';
import { TiArrowSortedDown } from 'react-icons/ti'

const TimelineEvent = () => {

    const timestamps = [
        {
            id:uuid(), 
            num: 1,
            description: 'started studying architecture at Czech Technical University, Prague ', 
            date: 'September 2019'
        }, 
        {
            id:uuid(), 
            num: 2,
            description: 'left university 2 years later due to COVID pandemic', 
            date: 'June 2021'
        }, 
        {
            id:uuid(), 
            num: 3,
            description: 'moved to the Netherlands', 
            date: 'October 2021'
        }, 
        {
            id:uuid(), 
            num: 4,
            description: 'started learning programming on my own', 
            date: 'December 2021'
        }, 
        {
            id:uuid(), 
            num: 5,
            description: 'enrolled in a university to study software development', 
            date: 'April 2022'
        },
        {
            id:uuid(), 
            num: 6,
            description: 'started working on personal projects and portfolio', 
            date: 'November 2022'
        }, 
        {
            id:uuid(), 
            num: 7,
            description: 'moved to Prague, Czech Republic', 
            date: 'June 2023'
        }, 
        {
            id:uuid(), 
            num: 8,
            description: 'searching for an entry level job or internship', 
            date: 'July 2023'
        }
    ]

    const populateTimeline = timestamps.map(event => {
        return (
            <div className="timeline__event">
                <p className='date-invisible'>{event.date}</p>
                <TiArrowSortedDown className='arrow__icon'/>
                <p>{event.description}</p>
            </div>
        )
    });


    return (
        <div>
            {populateTimeline}
        </div>
        
        
    )
}

export default TimelineEvent;