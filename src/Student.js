import React from 'react'

class Student extends React.Component {
    render() {
        return (
            <div className="student col-lg-12 col-md-12 col-sm-12 col-12" style={{display: this.props.isVisible ? 'block' : 'none'}}>
                <p>{this.props.studentName} is my name, my whole body's made of glitter and I throw it in your face!</p>
                <div className="studentForm">
                    <div className="breakfast">
                        <h2 className="student col-lg-12 col-md-12 col-sm-12 col-12">Breakfast</h2>
                        <form className="container">
                            
                                <fieldset className="mealChoice col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="row">
                                        <legend className="col-form-label col-lg-4 col-md-4 col-sm-4 col-4">Monday</legend>
                                        <div className="form-check col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label className="form-check-label col-lg-2 col-md-2 col-sm-2 col-2">Home</label>
                                            <input className="form-check-input col-lg-1 col-md-1 col-sm-1 col-1" type="radio" name="mondayBreakfast" value="false" />
                                        </div>
                                        <div className="form-check col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label className="form-check-label col-lg-2 col-md-2 col-sm-2 col-2">School</label>
                                            <input className="form-check-input col-lg-1 col-md-1 col-sm-1 col-1" type="radio" name="mondayBreakfast" value="true" />
                                        </div>
                                    </div>
                                </fieldset>
                            
                        </form>
                    </div>
                </div>
                <div className="studentResults printOnly" style={{display: 'none'}}>
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
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                            </tr>
                            <tr className="lunchRow">
                                <td>Breakfast</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                            </tr>
                            <tr className="morningBusRow">
                                <td>Breakfast</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                                <td>{1 === 1 ? 'School' : 'Home'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Student;