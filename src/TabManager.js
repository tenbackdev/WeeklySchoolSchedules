import React from 'react'
import Tab from './Tab.js';
import {students} from './constants.js'

class TabManager extends React.Component {
    constructor(props) {
        super(props)
        this.state = {visibleComponents: students.map((_, index) => index === 0)} //Make first element true, all others false
    }

    toggleVisibility = (index) => {
        this.setState((prevState) => {
            const newVisibility = prevState.visibleComponents.map((isVisible, i) =>
                i === index ? true : false
            );
            return {visibleComponents: newVisibility};
        })
    }

    render() {
        return (
            <div id='tabManager'>
                <div id='buttons'>
                    {students.map((item,index) => (
                        <button key={`button${index}`} onClick={() => this.toggleVisibility(index)}>{item}</button>
                    ))}
                </div>
                {students.map((item,index) => (
                    <Tab key={`tab${index}`} isVisible={this.state.visibleComponents[index]} studentName = {item} />
                ))}
            </div>
        )
    }
}

export default TabManager





