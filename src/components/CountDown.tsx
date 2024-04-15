import React, { useState, useEffect } from "react";
import "../stylesheets/CountDown.css";

interface CountDown {
  targetDate: Date; // Define the type of targetDate as Date
}

const CountDown: React.FC<CountDown> = ({ targetDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate.getTime() - now.getTime(); // Use getTime() to get milliseconds

      const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setDays(daysRemaining);
      setHours(hoursRemaining);
      setMinutes(minutesRemaining);
      setSeconds(secondsRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-timer">
      <div className="timer-container">
        <div className="timer-box">
          <span className="timer-value">{days}</span><br/>
          <span className="timer-label">Days</span>

        </div>
        <div className="timer-box">
      
          <span className="timer-value">{hours}</span><br/>
          <span className="timer-label">Hours</span>
        </div>
        <div className="timer-box">
          <span className="timer-value">{minutes}</span><br/>
          <span className="timer-label">Minutes</span>

        </div>
        <div className="timer-box">
          <span className="timer-value">{seconds}</span><br/>
          <span className="timer-label">Seconds</span>

        </div>
      </div>
    </div>
  );
};

export default  CountDown 
;
