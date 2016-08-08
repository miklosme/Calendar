import {ActionTypes as AT} from '../constants';

export const addAppointment = appointment => {
  const { title, startTime, endTime, description } = appointment;
  return {
    type: AT.ADD_APPOINTMENT,
    id: Date.now(),
    title,
    startTime,
    endTime,
    description,
  }
};
