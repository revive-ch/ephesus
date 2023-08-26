import React from 'react';
import Riddle from './Riddle';
import './App.css';

function App() {
  // Single riddle properties
  const question = "The green heart of OSU. The number of buckeyes who havn't walked its paths are few.";
  const answer = 'oval';
  const audioSrc = `${process.env.PUBLIC_URL}/audio/Oval.m4a`;

  return (
    <div className="App">
      <Riddle question={question} correctAnswer={answer} audioSrc={audioSrc} />
    </div>
  );
}

export default App;
