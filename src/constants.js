import keyMirror from 'keymirror';

export const ActionTypes = keyMirror({
  ADD_APPOINTMENT: null,
});

export const STORAGE_KEY = 'calendar-app-storage-key';

export const TIME_RANGE_MIN = 7;
export const TIME_RANGE_MAX = 17;
