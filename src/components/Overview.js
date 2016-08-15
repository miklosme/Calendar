import React from 'react';
import {TIME_RANGE_MIN, TIME_RANGE_MAX} from '../constants';
import dateFormat from 'dateformat';
import leftPad from 'left-pad'; // :D
import Appointment from '../components/Appointment';
import {timeNodeHeight} from '../../style/values.scss';

const ONE_HOUR_HEIGHT = parseInt(timeNodeHeight, 10);

const timeListLength = TIME_RANGE_MAX - TIME_RANGE_MIN + 1;
const timeList = Array.from({ length: timeListLength }).map((_, index) => {
  const hour = TIME_RANGE_MIN + index;
  return `${leftPad(hour, 2, 0)}:00`;
});

function groupByOverlap() {
  let currentEndTime = null;
  return (prev, curr) => {
    if (currentEndTime === null) {
      currentEndTime = curr.endTime;
      return [[curr]];
    }

    if (currentEndTime > curr.startTime) {
      prev[prev.length - 1].push(curr);
    } else {
      prev.push([curr]);
    }

    if (currentEndTime < curr.endTime) {
      currentEndTime = curr.endTime;
    }

    return prev;
  }
}

function calculateGaps() {
  let previousEndTime = TIME_RANGE_MIN * 60;
  return group => {
    const result = group.map(data => {
      const height = Math.max(30, (data.endTime - data.startTime) / 60 * ONE_HOUR_HEIGHT);
      return {
        data,
        marginTop: (data.startTime - previousEndTime) / 60 * ONE_HOUR_HEIGHT,
        height,
      };
    });

    previousEndTime = Math.max(...result.map(({ data : { endTime } }) => endTime));

    return result;
  }
}

function stableSortByStart(a, b) {
  if (a.startTime === b.startTime) {
    return a.id - b.id;
  }

  return a.startTime - b.startTime;
}

const Overview = ({ appointments, onSelect, selectedId }) => {
  const now = new Date();
  const today = dateFormat(now, 'd mmmm yyyy').toLowerCase();

  const appointmentsGroupedByOverlap = appointments
    .sort(stableSortByStart)
    .reduce(groupByOverlap(), [])
    .map(calculateGaps());

  let container;
  const selectFirstAppointment = () => {
    const first = container.querySelector('.appointment');
    if (first) {
      first.focus();
    }
  };

  return (
    <div className="overview" onClick={() => onSelect(null)}>
      <header>{today}</header>
      <article ref={x => container = x}>
        <ul>
          {timeList.map((text, index) => <li key={index}>{text}</li>)}
        </ul>
        <div className="appointment-container">
          {appointmentsGroupedByOverlap.map((appointments, index) => (
            <div key={index} className="appointment-group">
              {appointments.map(({ data, marginTop, height }, index) => (
                <Appointment
                  key={index}
                  values={data}
                  style={{ marginTop, height }}
                  onSelect={onSelect}
                  isSelected={selectedId === data.id}
                />
              ))}
            </div>
          ))}
        </div>
      </article>
      <a
        href="#"
        onFocus={selectFirstAppointment}
        onClick={event => event.preventDefault()}
      />
    </div>
  );
};

export default Overview;
