import {ActionTypes as AT} from '../constants';

const events = (state = [], action) => {
  const matchById = ({ id }) => id !== action.id;

  switch (action.type) {
    case AT.ADD_APPOINTMENT:
      const { id, title, startTime, endTime, description } = action;
      return [
        ...state.filter(matchById),
        {
          id,
          title,
          startTime: Math.min(startTime, endTime),
          endTime: Math.max(startTime, endTime),
          description,
        }
      ];

    case AT.REMOVE_APPOINTMENT:
      return state.filter(matchById);

    case AT.DELETE_ALL_APPOINTMENTS:
      return [];

    default:
      return state
  }
};

export default events;
