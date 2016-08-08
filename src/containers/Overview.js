import React from 'react';
import { connect } from 'react-redux';
import { TIME_RANGE_MIN, TIME_RANGE_MAX } from '../constants';
import dateFormat from 'dateformat';
import leftPad from 'left-pad'; // :D
import Appointment from '../components/Appointment';
import { timeNodeHeight } from '../../style/values.scss';

const ONE_HOUR_HEIGHT = parseInt(timeNodeHeight, 10);

const timeListLength = TIME_RANGE_MAX - TIME_RANGE_MIN + 1;
const timeList = Array.from({ length: timeListLength }).map((_, index) => {
  const hour = TIME_RANGE_MIN + index;
  return `${leftPad(hour, 2, 0)}:00`;
});

function createGroupper() {
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
  let previousEndTime = null;
  return group => {
    if (previousEndTime === null) {
      previousEndTime = TIME_RANGE_MIN * 60;
    }
    const topGapTime = group[0].startTime - previousEndTime;
    const topGapPixel = topGapTime / 60 * ONE_HOUR_HEIGHT;
    previousEndTime = Math.max(...group.map(({ endTime }) => endTime));
    return {
      topGapPixel,
      appointments: group,
    }
  }
}

let Overview = ({ appointments }) => {
  const now = new Date();
  const today = dateFormat(now, 'd mmmm yyyy').toLowerCase();

  const appointmentsGroupedByOverlap = appointments
    .sort(({ startTime: a }, { startTime: b }) => a - b)
    .reduce(createGroupper(), [])
    .map(calculateGaps());

  console.log(appointmentsGroupedByOverlap);

  return (
    <div className="overview">
      <header>{today}</header>
      <article>
        <ul>
          {timeList.map((text, index) => <li key={index}>{text}</li>)}
        </ul>
        <div className="appointment-container">
          {appointmentsGroupedByOverlap.map(({ appointments, topGapPixel }, index) => (
            <div key={index} className="appointment-group" style={{ marginTop: topGapPixel }}>
              {appointments.map((data, index) => (
                <Appointment key={index} {...data} marginTop={topGapPixel} />
              ))}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

const mapStateToProps = ({ appointments }) => {
  return {
    appointments,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      //dispatch(toggleTodo(id))
    }
  }
};

Overview = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);

export default Overview;
