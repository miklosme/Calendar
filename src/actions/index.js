import {ActionTypes as AT} from '../constants';

export const addEvent = (event) => {
  console.log(event);
  const { title, startTime, endTime, description } = event;
  return {
    type: AT.ADD_EVENT,
    id: Date.now(),
    title, startTime, endTime, description,
  }
};
