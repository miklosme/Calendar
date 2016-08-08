import React from 'react';
import { integerTimeToString } from '../utils';

const Appointment = ({ title, startTime, endTime, description }) => {
  const start = integerTimeToString(startTime);
  const end = integerTimeToString(endTime);
  const time = `${start} - ${end}`;
  return (
    <div className="appointment" >
      <h1>{title}</h1>
      <div className="time">{time}</div>
      <br/>
      <p className="description">{description}</p>
    </div>
  );
};

export default Appointment;
