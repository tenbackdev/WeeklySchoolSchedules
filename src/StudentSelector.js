import React from 'react'

export default function StudentSelector({isVisible, studentName, onClickMethod}) {
    return (
        <button className={isVisible ? 'student-active' : 'student-inactive'} 
            key={`studentSelect${studentName}`}
            onClick={() => onClickMethod(studentName)}
            >
                {studentName}
        </button>
    )
}