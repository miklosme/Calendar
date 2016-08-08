import { combineReducers } from 'redux';
import appointments from './appointments';

const calendarApp = combineReducers({
  appointments,
});

export default calendarApp;
