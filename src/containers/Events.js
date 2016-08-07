import React from 'react';
import { connect } from 'react-redux';

let Events = ({ events }) => {
  return (
    <ul>
      {events.map(({ text }, index) => <li key={index}>{text}</li>)}
    </ul>
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

Events = connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);

export default Events;
