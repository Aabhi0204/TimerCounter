import React, { useEffect, useRef, useState } from "react";
import "./TimerCounter.css";

function TimerCounter() {
  const [time, setTime] = useState(0);
  const [isActive, setActive] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const intervalRef = useRef(null);

  const handleInput = (event) => {
    setTime(parseInt(event.target.value * 60));
  };

  const formateTime = () => {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    return `${min} :${sec}`;
  };

  const handleStart = () => {
    setActive(true);
    setIsPause(false);
  };

  const handlePause = () => {
    setIsPause(!isPause);
  };

  const handleRest = () => {
    clearInterval(intervalRef.current);
    setActive(false);
    setIsPause(false);
    setTime(0);
  };

  useEffect(() => {
    if (isActive && !isPause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0 && isActive) {
      clearInterval(intervalRef.current);
      setActive(false);
      alert("Your time  up");
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive, isPause, time]);

  return (
    <div className="countdown-timer">
      <h1>Countdown Timer</h1>
      <div className="timer-display">
        <input
          type="number"
          placeholder="Enter Time IN minutes"
          onChange={handleInput}
        />
        <div>{formateTime()}</div>
      </div>
      <div className="timer-controls">
        <button onClick={handleStart} disabled={isActive && !isPause  || time === 0}>
          Start
        </button>
        <button onClick={handlePause}>{isPause ? "Resume" : "Pause"}</button>
        <button onClick={handleRest}>Reset</button>
      </div>
    </div>
  );  
}



export default TimerCounter;
