import React from 'react';
import Overview from '../containers/Overview';
import Editor from '../containers/Editor';

const App = () => (
  <div className="calendar-app" >
    <h1>Today's appointments</h1>
    <div className="calendar-body">
      <Overview />
      <Editor />
    </div>
  </div>
);

export default App;
