import { combineReducers } from 'redux';
import events from './events';

const calendarApp = combineReducers({
  events,
});

export default calendarApp;
