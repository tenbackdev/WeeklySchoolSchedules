import React from 'react'
import Student from './Student.js';
import {students} from './constants.js'

class Students extends React.Component {
    constructor(props) {
        super(props)
        this.state = {visibleStudents: students.map((_, index) => index === 0)} //Make first element true, and the rest false
    }

    toggleVisibility = (index) => {
        this.setState((prevState) => {
            const newVisibility = prevState.visibleStudents.map((isVisible, i) => 
                i === index ? true : false
            );
            return {visibleStudents: newVisibility};
        })
    }

    render() {
        const bootstrapColumns = Math.floor(12 / this.state.visibleStudents.length)

        return (
            <div className="container students">
                <div className="row buttons">
                    {students.map((item, index) => (
                        <button key={`buttonStudent${index}`}
                            className={`${this.state['visibleStudents'][index] === true ? 'button-selected' : 'button-not-selected'} col-lg-${bootstrapColumns} col-md-${bootstrapColumns} col-sm-${bootstrapColumns} col-${bootstrapColumns}`}
                            onClick={() => this.toggleVisibility(index)}>{item}</button>
                    ))}
                </div>
                <div>
                    {students.map((item, index) => (
                        <Student key={`tab${item}`} studentName={item} isVisible={this.state.visibleStudents[index]}/>
                    ))}
                </div>
            </div>
        )
    }

}

export default Students;