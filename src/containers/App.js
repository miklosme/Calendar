import React, {Component} from 'react';
import Overview from '../components/Overview';
import Editor from '../components/Editor';
import {connect} from 'react-redux';
import {addAppointment, removeAppointment} from '../actions';

function getDefaultEditor() {
  const date = new Date();
  const nextHour = (date.getHours() + 1) * 60;
  return {
    id: date.getTime(),
    title: '',
    startTime: nextHour,
    endTime: nextHour + 30,
    description: '',
  };
}

class App extends Component {

  state = {
    editor: getDefaultEditor(),
  };

  editorSave = () => {
    console.log(this.state.editor.id);
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
    console.log(editor);
    this.setState({
      editor,
    });
  };

  editorChange = (key, convert = x => x) => event => {
    this.setState({
      editor: Object.assign({}, this.state.editor, {
        [key]: convert(event.target.value),
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
