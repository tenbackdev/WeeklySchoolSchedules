import React from 'react'
import DaySelector from './DaySelector.js'
import StudentSelector from './StudentSelector.js'
import StudentPlanner from './StudentPlanner.js'
import {students, daysOfWeek} from './constants.js'

class App extends React.Component {
    constructor(props) {
        super(props)

        const daysMealsMap = new Map(daysOfWeek.map((day) => [day, {breakfast: 'Home', lunch: 'Home'}]));       
        //console.log(daysMealsMap) 

        const studentMap = students.reduce((acc, student, index) => {
            acc.set(student, {isVisible: index === 0 ? true : false,
                meals: daysMealsMap
            }); //need to get this to a sub entry with a key of isVisible
            return acc;
        }, new Map());

        this.state = {
            days: new Map(daysOfWeek.map((item) => [item, true])),
            students: studentMap
        }
        this.toggleDay = this.toggleDay.bind(this);
        this.toggleStudent = this.toggleStudent.bind(this);
        this.handleMealChange = this.handleMealChange.bind(this);
    }

    toggleDay(dayName) {
        this.setState((prevState) => {
            const newDays = new Map(Array.from(prevState.days, ([day, value]) => [day, day === dayName ? !value : value]))
            return {...prevState, 
                days: newDays}
        })
    }

    toggleStudent(studentName) {
        this.setState((prevState) => {
            const newStudentsVisibility = new Map()

            prevState.students.forEach((student, key) => {
                newStudentsVisibility.set(key, {
                    ...student,
                    isVisible: key === studentName
                });
            });

            return {students: newStudentsVisibility};
        })
    }

    handleMealChange(studentName, day, meal, choice) {
        this.setState((prevState) => {
            const newStudents = prevState.students;
            const studentData = {...newStudents.get(studentName)};
            const newMealsMap = new Map(studentData.meals);
            const dayMeals = {...newMealsMap.get(day)};
            dayMeals[meal] = choice;
            newMealsMap.set(day, dayMeals);
            studentData.meals = newMealsMap;
            newStudents.set(studentName, studentData);
            newStudents.get(studentName).meals.get(day)[meal] = choice;

            return {students: newStudents};
        });
    }

    render() {
        const daysEntries = Array.from(this.state.days.entries())
        const studentsMap = Array.from(this.state.students.entries());

        return (
            <div>
                <div className='day-selection col-lg-12 col-md-12 col-sm-12 col-12'>
                    {daysEntries.map(([key, value]) => (
                        <DaySelector key={`enable${key}`} dayName={key} dayEnabled={value} onClickMethod={this.toggleDay}/>
                    ))}
                </div>
                <div className='student-selection col-lg-12 col-md-12 col-sm-12 col-12'>
                    {studentsMap.map(([key, value]) => (
                        <StudentSelector key={`studentSelect${key}`} isVisible={value.isVisible} studentName={key} onClickMethod={this.toggleStudent}/>
                        
                    ))}
                </div>
                <div className='meal-selection col-lg-12 col-md-12 col-sm-12 col-12'>
                    {studentsMap.map(([key, value]) => (
                        <StudentPlanner key={`studentPlan${key}`} 
                            isVisible={value.isVisible} 
                            studentName={key} 
                            days={this.state.days} 
                            meals={new Map(value.meals)} 
                            onClickMethod={this.handleMealChange} />
                    ))}
                </div>
            
            </div>

        )
    }
}


export default App;
