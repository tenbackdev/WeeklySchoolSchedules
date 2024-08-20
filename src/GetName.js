import React from 'react'

class GetName extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {firstName: '', lastName: ''}
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event) {
        // Willing to be that there is a better way of handling this, but starting out simple.
        event.target.name === 'firstName' ? 
            this.setState({firstName: event.target.value}) :
            this.setState({lastName: event.target.value})
    }

    onSubmit(event) {
        alert(`You've submitted: ${this.state.firstName} ${this.state.lastName}`)
        event.preventDefault() //Stopping the default ways of bubbling through
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} />
                    Last Name:
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} />
                </label>
                <input type="submit" />
            </form>
        )
    }
}

export default GetName;





