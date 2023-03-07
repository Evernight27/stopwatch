import React, { Component, useState } from 'react';
import "./Stopwatch.css"

function Stopwatch() {
  const [counter, setCounter] = useState(0)
  const [isRunning, setIsRunning]
    = useState(false)
  const [intervalId, setIntervalId] = useState()

  function handleStart() {
    if (!isRunning) {
      setInterval(() => setCounter(counter => counter + 1), 1000)
      setIntervalId(id)
      setIsRunning(true)
    }
  }
  function reset() {
    setCounter(counter => counter = 0)
  }
  function pause() {
    clearInterval()
  }
  return (
    <div className="stopwatch">
      <h1>{counter}</h1>
      <div className="controls">
        <button
          onClick={reset}
        >Reset</button>
        <button
          onClick={handleStart}
        >Start</button>
        <button
          onClick={pause}
        >Pause</button>
      </div>
    </div>
  );
}

export default Stopwatch;
