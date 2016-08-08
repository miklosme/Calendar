import {ActionTypes as AT} from '../constants';

const events = (state = [], action) => {
  switch (action.type) {
    case AT.ADD_APPOINTMENT:
      const { id, title, startTime, endTime, description } = action;
      return [
        ...state,
        { id, title, startTime, endTime, description }
      ];
    default:
      return state
  }
};

export default events;
