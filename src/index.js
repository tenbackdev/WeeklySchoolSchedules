import React from 'react';
import ReactDOM from 'react-dom/client';
import One from './One.js';
import Two from './Two.js';
import Welcome from './Welcome.js';
import Clock from './Clock.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <One />
    <Two />
    <Welcome name='Andy' />
    <Clock />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
