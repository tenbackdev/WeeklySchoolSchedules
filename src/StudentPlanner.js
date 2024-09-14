import React from 'react'
import DayMeal from './DayMeal.js'

export default function StudentPlanner({isVisible, studentName, days, meals, onClickMethod}) {
    return (
        <div key={`student${studentName}`} className={`student ${isVisible ? 'student-visible' : 'student-nonvisible'}`}>
            <p>{studentName} is my name, come straight from my daddy's mane, my whole body's made of glitter, and I'll throw it in your face!</p>
            <h3 className='meal-header'>Breakfast</h3>
            {Array.from(days).map(([day, value]) => (
                        <DayMeal key={`breakfast${day}${studentName}`}
                            isEnabled={!value}
                            studentName={studentName}
                            day={day}
                            meals={meals}
                            meal='breakfast'
                            onClickMethod={onClickMethod}/>
            
            ))}
            <h3 className='meal-header'>Lunch</h3>
            {Array.from(days).map(([day, value]) => (
                        <DayMeal key={`lunch${day}${studentName}`}
                            isEnabled={!value}
                            studentName={studentName}
                            day={day}
                            meals={meals}
                            meal='lunch'
                            onClickMethod={onClickMethod}/>
            
            ))}
        </div>
    )
}
