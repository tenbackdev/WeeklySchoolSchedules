import React from 'react'

export default function render() {
    return (
        <h1 className="week-of">Week of {formateDate(getMondayDate())}</h1>
    )
}

function getMondayDate(currentDate = new Date()) {
    const date = new Date(currentDate);
    const day = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (day >= 1 && day <= 5) { // Monday to Friday
        const diff = 1 - day; // Difference to get the previous Monday
        date.setDate(date.getDate() + diff);
    } else if (day === 6) { // Saturday 
        const diff = 2; // Difference to get the next Monday
        date.setDate(date.getDate() + diff);
    } else { //Sunday
        const diff = 1;
        date.setDate(date.getDate() + diff);
    }

    return date;
}

function formateDate(date) {
    if (!(date instanceof Date)) {
        throw new TypeError('date input must be an instance of Date');
    }

    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}/${day}`;
}

