import React from 'react'

export default function PrintResults({studentName}) {
    return (
        <div className='print-only'>
            <div key={`printStudent${studentName}`}>
                <p>{studentName}</p>
            </div>
        </div>
    )
}