import React from 'react';
import {integerTimeToString} from '../utils';

const Appointment = ({ id, title, startTime, endTime, description, marginTop, height, onSelect }) => {
  const start = integerTimeToString(startTime);
  const end = integerTimeToString(endTime);
  const time = `${start} - ${end}`;
  return (
    <a
      href="#"
      className="appointment"
      style={{ marginTop, height }}
      onClick={event => {
        event.preventDefault();
        onSelect({ id, title, startTime, endTime, description });
      }}
    >
      <h1>{title}</h1>
      <div className="time">{time}</div>
      <br/>
      <p className="description">{description}</p>
    </a>
  );
};

export default Appointment;
