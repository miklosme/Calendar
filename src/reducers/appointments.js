import {ActionTypes as AT} from '../constants';
import { stringTimeToInteger } from '../utils';

const events = (state = [], action) => {
  switch (action.type) {
    case AT.ADD_APPOINTMENT:
      const { id, title, startTime, endTime, description } = action;
      const time1 = stringTimeToInteger(startTime);
      const time2 = stringTimeToInteger(endTime);
      return [
        ...state,
        {
          id,
          title,
          startTime: Math.min(time1, time2),
          endTime: Math.max(time1, time2),
          description,
        }
      ];
    default:
      return state
  }
};

export default events;
