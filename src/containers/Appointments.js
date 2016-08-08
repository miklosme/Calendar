import React from 'react';
import { connect } from 'react-redux';
import { TIME_RANGE_MIN, TIME_RANGE_MAX } from '../constants';
import leftPad from 'left-pad'; // :D

const timeListLength = TIME_RANGE_MAX - TIME_RANGE_MIN + 1;
const timeList = Array.from({ length: timeListLength }).map((_, index) => {
  const hour = TIME_RANGE_MIN + index;
  return `${leftPad(hour, 2, 0)}:00`;
});

let Appointments = ({ events }) => {
  return (
    <div className="appointments">
      <header>1 augustus 2016</header>
      <article>
        <ul>
          {timeList.map((text, index) => <li key={index}>{text}</li>)}
        </ul>
      </article>
    </div>
  );
};

const mapStateToProps = ({ events }) => {
  return {
    events,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      //dispatch(toggleTodo(id))
    }
  }
};

Appointments = connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointments);

export default Appointments;
