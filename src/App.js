import React from 'react'
import DaySelector from './DaySelector.js'
import StudentSelector from './StudentSelector.js'
import StudentPlanner from './StudentPlanner.js'
import PrintResults from './PrintResults.js'
import {students, daysOfWeek} from './constants.js'

class App extends React.Component {
    constructor(props) {
        super(props)

        const daysMealsMap = new Map(daysOfWeek.map((day) => [day, {breakfast: 'Home', lunch: 'Home'}]));       

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
        this.calcBreakfastLocation = this.calcBreakfastLocation.bind(this);
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

    calcBreakfastLocation(meal) {
        const decisionMap = new Map(
            Array.from(this.state.days.entries()).map(([day, _]) => {
                const studentChoiceArray = Array.from(this.state.students.entries()).map(([_, value]) => {
                    return value.meals.get(day)[meal];
                })
                return [day, studentChoiceArray.some(studentChoice => studentChoice === 'Home') ? 'Home' : 'School'];
        }));
        return decisionMap;
    }

    render() {
        const daysEntries = Array.from(this.state.days.entries())
        const studentsMap = Array.from(this.state.students.entries());
        const breakfastLocationMap = this.calcBreakfastLocation('breakfast');
        const busMap = new Map(Array.from(breakfastLocationMap).map(([key, value]) => [key, value === 'School' ? 'Bus' : 'Car']))

        console.log(breakfastLocationMap);
        console.log(busMap);

        return (
            <div>
                <div className='print-only'>
                    {studentsMap.map(([key, value]) => (
                        <PrintResults studentName={key} 
                            days={this.state.days} 
                            breakfast={breakfastLocationMap}
                            meals={this.state.students.get(key).meals} 
                            bus={busMap} />
                    ))}
                </div>
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


/*
                <div>
                    {studentsMap.map(([key, value]) => (
                        <p>{this.calcBreakfastLocation('breakfast')}</p>
                    ))}
                </div>
*/

