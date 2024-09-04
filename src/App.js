import React from 'react'
import DaySelector from './DaySelector.js'
import {daysOfWeek} from './constants.js'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            days: new Map(daysOfWeek.map((item) => [item, true]))
        }
        this.toggleDay = this.toggleDay.bind(this);
    }

    toggleDay(dayName) {
        this.setState((prevState) => {
            const newDays = new Map(Array.from(prevState.days, ([day, value]) => [day, day === dayName ? !value : value]))
            return {...prevState, 
                days: newDays}
        })
    }

    render() {
        console.log(this.state['days'])

        const daysEntries = Array.from(this.state['days'].entries())
        console.log(daysEntries);

        return (
            <div>
                <div className='day-selection'>
                    {daysEntries.map(([key, value]) => (
                        <DaySelector key={`enable${key}`} dayName={key} dayEnabled={value} onClickMethod={this.toggleDay}/>
                    ))}
                </div>                
            </div>

        )
    }
}


export default App;
