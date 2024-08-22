import React from 'react';

class Toggle extends React.Component {
    constructor (props) {
        super (props)
        this.state = {isVisible: true}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({isVisible: !state.isVisible}))
    }

    render() {
        const show = this.state.isVisible

        return (
            <div id="toggle">
                <button onClick={this.handleClick}>
                    {show ? 'HIDE' : 'DISPLAY'}
                </button>
                <p>{show ? 'Here is some text' : ''}</p>
            </div>
        )
    }
}

export default Toggle;
