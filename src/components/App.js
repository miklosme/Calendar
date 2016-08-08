import React from 'react';
import Appointments from '../containers/Appointments';
import Editor from '../containers/Editor';

const App = () => (
  <div className="calendar-app" >
    <h1>Today's appointments</h1>
    <div className="calendar-body">
      <Appointments />
      <Editor />
    </div>
  </div>
);

export default App;
