import React from 'react';
import ReactDOM from 'react-dom/client';
import One from './One.js';
import Two from './Two.js';
import Welcome from './Welcome.js';
import Clock from './Clock.js';
import Toggle from './Toggle.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
let uniqueId = 0
const listOfDays = days.map((day) => <li key={uniqueId++}>{day}</li>)

root.render(
  <>
    <One />
    <Two />
    <Welcome name='Andy' />
    <Clock />
    <Toggle />
    <ul>{listOfDays}</ul>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
