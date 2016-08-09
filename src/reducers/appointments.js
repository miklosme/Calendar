import {ActionTypes as AT} from '../constants';
import { stringTimeToInteger } from '../utils';

const events = (state = [], action) => {
  const matchById = ({ id }) => id !== action.id;

  switch (action.type) {
    case AT.ADD_APPOINTMENT:
      const { id, title, startTime, endTime, description } = action;
      const time1 = stringTimeToInteger(startTime);
      const time2 = stringTimeToInteger(endTime);
      return [
        ...state.filter(matchById),
        {
          id,
          title,
          startTime: Math.min(time1, time2),
          endTime: Math.max(time1, time2),
          description,
        }
      ];

    case AT.REMOVE_APPOINTMENT:
      return state.filter(matchById);

    default:
      return state
  }
};

export default events;
