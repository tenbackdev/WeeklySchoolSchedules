import React from 'react'
import {daysOfWeek} from './constants.js'

class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            breakfast: daysOfWeek.map((item) => false),
            lunch: daysOfWeek.map((item) => false)
        }
    }

    toggleState(attribute, index, value) {
        this.setState((prevState) => {
            return {
                [attribute]: prevState[attribute].map((item, i) =>
                    i === index ? value : item
                )
            }
        })
    }

    render() {
        return (
            <div className="student col-lg-12 col-md-12 col-sm-12 col-12" style={{display: this.props.isVisible ? 'block' : 'none'}}>
                <p>{this.props.studentName} is my name, my whole body's made of glitter and I throw it in your face!</p>
                <div className="studentForm">
                    <div className="breakfast no-print">
                        <h2 className="student col-lg-12 col-md-12 col-sm-12 col-12">Breakfast</h2>
                        {daysOfWeek.map((item, index) => (
                            <form key={`breakfast${item}`} className="container">
                                <fieldset className="mealChoice col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="row align-items-center">
                                        <legend className="radio-button-legend col-lg-4 col-md-4 col-sm-4 col-4">{item}</legend>
                                        <div className="radio-button-name col-lg-4 col-md-4 col-sm-4 col-4">
                                            <input className="" type="radio" name={`${item}Breakfast`} 
                                                value="false"  onChange={() => this.toggleState('breakfast', index, false)}
                                                checked={!this.state['breakfast'][index]} />
                                            <label className="">Home</label>
                                        </div>
                                        <div className="radio-button-name col-lg-4 col-md-4 col-sm-4 col-4">
                                            <input className="" type="radio" name={`${item}Breakfast`} 
                                                value="true" onChange={() => this.toggleState('breakfast', index, true)} 
                                                checked={this.state['breakfast'][index]} />
                                            <label className="">School</label>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        ))}
                    </div>
                    <div className="lunch no-print">
                        <h2 className="student col-lg-12 col-md-12 col-sm-12 col-12">Lunch</h2>
                        {daysOfWeek.map((item, index) => (
                            <form key={`lunch${item}`} className="container">
                                <fieldset className="mealChoice col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="row align-items-center">
                                        <legend className="radio-button-legend col-lg-4 col-md-4 col-sm-4 col-4">{item}</legend>
                                        <div className="radio-button-name col-lg-4 col-md-4 col-sm-4 col-4">
                                            <input className="" type="radio" name={`${item}Lunch`} 
                                                value="false"  onChange={() => this.toggleState('lunch', index, false)}
                                                checked={!this.state['lunch'][index]} />
                                            <label className="">Home</label>
                                        </div>
                                        <div className="radio-button-name col-lg-4 col-md-4 col-sm-4 col-4">
                                            <input className="" type="radio" name={`${item}Lunch`} 
                                                value="true" onChange={() => this.toggleState('lunch', index, true)} 
                                                checked={this.state['lunch'][index]} />
                                            <label className="">School</label>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        ))}
                    </div>
                </div>
                <div className="studentResults print-only">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="breakfastRow">
                                <td>Breakfast</td>
                                {daysOfWeek.map((item, index) => (
                                    <td key={`printBreakfast${item}`}>{this.state['breakfast'][index] === true ? 'School' : 'Home'}</td>
                                ))}
                            </tr>
                            <tr className="lunchRow">
                                <td>Lunch</td>
                                {daysOfWeek.map((item, index) => (
                                    <td key={`printLunch${item}`}>{this.state['lunch'][index] === true ? 'School' : 'Home'}</td>
                                ))}
                            </tr>
                            <tr className="morningBusRow">
                                <td>Bus</td>
                                {daysOfWeek.map((item, index) => (
                                    <td key={`printMorningBus${item}`}>{this.state['breakfast'][index] === true ? 'Bus' : 'Car'}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Student;