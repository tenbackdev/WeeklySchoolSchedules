import React from 'react'

export default function PrintResults({studentName, days, breakfast, meals, bus}) {
    return (
        <div className='print-only'>
            <div key={`printStudent${studentName}`}>
                <h2 className="print-student-header">{studentName}</h2>
                <table className="print-student-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th className={days.get('Monday') ? 'print-day-enabled' : 'print-day-disabled'}>M</th>
                            <th className={days.get('Tuesday') ? 'print-day-enabled' : 'print-day-disabled'}>T</th>
                            <th className={days.get('Wednesday') ? 'print-day-enabled' : 'print-day-disabled'}>W</th>
                            <th className={days.get('Thursday') ? 'print-day-enabled' : 'print-day-disabled'}>H</th>
                            <th className={days.get('Friday') ? 'print-day-enabled' : 'print-day-disabled'}>F</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Breakfast</td>
                            <td className={days.get('Monday') ? 'print-day-enabled' : 'print-day-disabled'}>{breakfast.get('Monday')}</td>
                            <td className={days.get('Tuesday') ? 'print-day-enabled' : 'print-day-disabled'}>{breakfast.get('Tuesday')}</td>
                            <td className={days.get('Wednesday') ? 'print-day-enabled' : 'print-day-disabled'}>{breakfast.get('Wednesday')}</td>
                            <td className={days.get('Thursday') ? 'print-day-enabled' : 'print-day-disabled'}>{breakfast.get('Thursday')}</td>
                            <td className={days.get('Friday') ? 'print-day-enabled' : 'print-day-disabled'}>{breakfast.get('Friday')}</td>
                        </tr>
                        <tr>
                            <td>Lunch</td>
                            <td className={days.get('Monday') ? 'print-day-enabled' : 'print-day-disabled'}>{meals.get('Monday').lunch}</td>
                            <td className={days.get('Tuesday') ? 'print-day-enabled' : 'print-day-disabled'}>{meals.get('Tuesday').lunch}</td>
                            <td className={days.get('Wednesday') ? 'print-day-enabled' : 'print-day-disabled'}>{meals.get('Wednesday').lunch}</td>
                            <td className={days.get('Thursday') ? 'print-day-enabled' : 'print-day-disabled'}>{meals.get('Thursday').lunch}</td>
                            <td className={days.get('Friday') ? 'print-day-enabled' : 'print-day-disabled'}>{meals.get('Friday').lunch}</td>
                        </tr>
                        <tr>
                            <td>Bus</td>
                            <td className={days.get('Monday') ? 'print-day-enabled' : 'print-day-disabled'}>{bus.get('Monday')}</td>
                            <td className={days.get('Tuesday') ? 'print-day-enabled' : 'print-day-disabled'}>{bus.get('Tuesday')}</td>
                            <td className={days.get('Wednesday') ? 'print-day-enabled' : 'print-day-disabled'}>{bus.get('Wednesday')}</td>
                            <td className={days.get('Thursday') ? 'print-day-enabled' : 'print-day-disabled'}>{bus.get('Thursday')}</td>
                            <td className={days.get('Friday') ? 'print-day-enabled' : 'print-day-disabled'}>{bus.get('Friday')}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}