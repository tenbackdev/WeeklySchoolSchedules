import React from 'react'

export default function DaySelector({dayName, dayEnabled, onClickMethod}) {
    return (
        <button className={`day-button ${dayEnabled ? 'day-enabled': 'day-disabled'}`} onClick={() => onClickMethod(dayName)}>{dayName.slice(0,3)}</button>
    )
}

