import React from 'react';

const Appointment = ({ title, startTime, endTime, description }) => (
  <div className="appointment" >
    <h1>{title}</h1>
    <div className="time">{startTime} - {endTime}</div>
    <br/>
    <p className="description">{description}</p>
  </div>
);

export default Appointment;
