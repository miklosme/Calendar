import React, {Component} from 'react';
import Overview from '../components/Overview';
import Editor from '../components/Editor';
import {connect} from 'react-redux';
import {addAppointment, removeAppointment} from '../actions';

function getDefaultEditor() {
  const date = new Date();
  return {
    id: date.getTime(),
    title: '',
    startTime: (date.getHours() + 1) * 60,
    endTime: (date.getHours() + 2) * 60,
    description: '',
  };
}

class App extends Component {

  state = {
    editor: getDefaultEditor(),
  };

  editorSave = () => {
    this.props.dispatch(addAppointment(this.state.editor));
    this.setState({
      editor: getDefaultEditor(),
    });
  };

  editorDelete = id => {
    this.props.dispatch(removeAppointment(id));
    this.setState({
      editor: getDefaultEditor(),
    });
  };

  setEditor = editor => {
    this.setState({
      editor,
    });
  };

  editorChange = key => event => {
    this.setState({
      editor: Object.assign({}, this.state.editor, {
        [key]: event.target.value,
      }),
    });
  };

  render() {
    const { appointments } = this.props;
    const { editor } = this.state;
    return (
      <div className="calendar-app">
        <h1>Today's appointments</h1>
        <div className="calendar-body">
          <Overview
            appointments={appointments}
            onSelect={this.setEditor}
          />
          <Editor
            {...editor}
            onChange={this.editorChange}
            onSave={this.editorSave}
            onCancel={this.editorDelete}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ appointments }) => {
  return {
    appointments,
  }
};

App = connect(mapStateToProps)(App);

export default App;
