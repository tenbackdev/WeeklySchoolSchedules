import React from 'react'

export default function DayMeal({isEnabled, studentName, day, meals, meal, onClickMethod}) {
    return (
            <div key={`breakfast${day}${studentName}`} className={`student-meal container ${isEnabled ? 'day-meal-disabled': 'day-meal-enabled'}`}>
                <p className='test'>{day}</p>
                <button className={`meal-home ${meals.get(day)[meal] === 'Home' ? 'meal-active' : 'meal-inactive'}`}
                    onClick={() => onClickMethod(studentName, day, meal, 'Home')}>Home</button>
                <button className={`meal-school ${meals.get(day)[meal] === 'School' ? 'meal-active' : 'meal-inactive'}`}
                    onClick={() => onClickMethod(studentName, day, meal, 'School')}>School</button>
            </div>
    )
}