import React from 'react';
import {integerTimeToString} from '../utils';

const Appointment = ({ values, onSelect }) => {
  const { title, startTime, endTime, description, marginTop, height } = values;
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
        event.stopPropagation();
      }}
      onFocus={() => onSelect(values)}
    >
      <h1>{title}</h1>
      <div className="time">{time}</div>
      <br/>
      <p className="description">{description}</p>
    </a>
  );
};

export default Appointment;
