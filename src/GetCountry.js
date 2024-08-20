import React from 'react';

class GetCountry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: 'USA'}
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event) {
        this.setState({value: event.target.value})
    }

    onSubmit(event) {
        alert(`You've selected ${this.state.value}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Select a country:
                    <select value={this.state.value} onChange={this.onChange}>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="USA">USA</option>
                    </select>
                </label>
            </form>
        )
    }
}

export default GetCountry;