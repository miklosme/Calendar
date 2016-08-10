import React from 'react';
import {integerTimeToString} from '../utils';
import classNames from 'classnames';

const Appointment = ({ values, onSelect, isSelected }) => {
  const { title, startTime, endTime, description, marginTop, height } = values;
  const start = integerTimeToString(startTime);
  const end = integerTimeToString(endTime);
  const time = `${start} - ${end}`;
  const className = classNames({
    'appointment': true,
    'selected': isSelected,
  });
  return (
    <a
      href="#"
      className={className}
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
