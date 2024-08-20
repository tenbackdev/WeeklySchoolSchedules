import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()} //sets to the current date
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('Hi');
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return <span> {this.state.date.toLocaleTimeString()} </span>
    }
}

export default Clock;









