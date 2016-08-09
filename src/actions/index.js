import {ActionTypes as AT} from '../constants';

export const addAppointment = appointment => {
  const { id, title, startTime, endTime, description } = appointment;
  return {
    type: AT.ADD_APPOINTMENT,
    id,
    title,
    startTime,
    endTime,
    description,
  }
};

export const removeAppointment = id => {
  return {
    type: AT.REMOVE_APPOINTMENT,
    id,
  }
};

export const deleteAllAppointments = () => ({
  type: AT.DELETE_ALL_APPOINTMENTS,
});
