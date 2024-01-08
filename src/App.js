import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Components/Question';
import ZoomIn from './Components/ZoomIn';
import ZoomOut from './Components/ZoomOut';
import { useState } from 'react';

function App() {

  const [state, setState] = useState({
    question: "What's your Pets Name?",
    answer: "June",
    typedText: null,
  });

  const handleChange = () => {
    const newState = { ...state }
    newState.question = state.answer;
    setState(newState)
  }

  const handleZoomChange = (event) => {
    const newState = { ...state }
    newState.typedText = event.target.value;
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
      <h4><b>Day 2</b></h4>
      <ZoomIn
        onChange={handleZoomChange}
        typedText={state.typedText}
      />
      <ZoomOut
        typedText={state.typedText}
      />
      <h4>Day 3</h4>
    </div>
  );
}

export default App;
