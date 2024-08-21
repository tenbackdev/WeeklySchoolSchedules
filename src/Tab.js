import React from 'react'
import './Tab.css';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
let uniqueId = 0
const listOfDays = days.map((day) => <li key={uniqueId++}>{day}</li>)


class Tab extends React.Component {
    render() {
        return (
            <div key={uniqueId++} id={`tab${this.props.studentName}`} className="studentTab" style={{display: this.props.isVisible ? 'block' : 'none'}}> 
                <p>This is the detail within {this.props.studentName}'s tab.</p>
                <label className="switch switchLabel">
                    <input type="checkbox" className="input" />
                    <span className="slider"></span>
                </label>
                <div id="breakfastChoices">
                    <h2>Breakfast</h2>
                    <form>
                        {days.map((item, index) => (
                                <fieldset key={uniqueId++}>
                                    <legend>{item}</legend>
                                    <label>
                                        <input type="radio" name={`${item}Breakfast`} value="false" />Home
                                    </label>
                                    <label>
                                        <input type="radio" name={`${item}Breakfast`} value="true" />School
                                    </label>
                                </fieldset>
                        ))}
                    </form>
                </div>
                <div id="lunchChoices">
                    <h2>Lunch</h2>
                    <form>
                        {days.map((item, index) => (
                            
                                <fieldset key={uniqueId++}>
                                    <legend>{item}</legend>
                                    <label>
                                        <input type="radio" name={`${item}Lunch`} value="false" />Home
                                    </label>
                                    <label>
                                        <input type="radio" name={`${item}Lunch`} value="true" />School
                                    </label>
                                </fieldset>
                        ))}
                    </form>
                </div>
                <ul>{listOfDays}</ul>
            </div>
        )
    }
}

export default Tab