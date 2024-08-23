import React from 'react'

class Student extends React.Component {
    render() {
        return (
            <div className="student col-lg-12 col-md-12 col-sm-12 col-12" style={{display: this.props.isVisible ? 'block' : 'none'}}>
                <p>{this.props.studentName} is my name, my whole body's made of glitter and I throw it in your face!</p>
            </div>
        )
    }
}

export default Student;