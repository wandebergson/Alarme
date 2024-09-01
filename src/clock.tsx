import React, { useState, useEffect } from 'react';
import AnalogClock from './analog';
import UnitAlarm from './unitAlarm';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []); 

  
  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      
      <h2>{formattedTime}</h2>
      {AnalogClock()}
      {UnitAlarm()}
    </div>
  );
};

export default Clock;