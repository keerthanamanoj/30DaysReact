import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Components/Question';
import { useState } from 'react';

function App() {

  const [state, setState] = useState({
    question: "What's your Pets Name?",
    answer: "June",
  });

  const handleChange = () => {
    const newState = {...state}
    newState.question = state.answer;
    setState(newState)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4><b>Day 1</b></h4>
      </header>
      <Question
        question={state.question}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
