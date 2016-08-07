import { ActionTypes as AT } from '../constants';

let nextEventId = 0;

export const addEvent = (text) => {
  return {
    type: AT.ADD_EVENT,
    id: nextEventId++,
    text,
  }
};
