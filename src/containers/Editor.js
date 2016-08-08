import React from 'react';
import { connect } from 'react-redux';
import { addAppointment } from '../actions';

let Editor = ({ dispatch }) => {
  const form = {};
  const saveRef = key => ref => {
    form[key] = ref;
  };

  const onSubmit = event => {
    event.preventDefault();

    const formKeys = Object.keys(form);

    const isEveryFieldValid = formKeys.every(key => {
      return form[key].value.trim() !== '';
    });

    if (!isEveryFieldValid) {
      return;
    }

    const formData = formKeys.reduce((output, key) => {
      output[key] = form[key].value;
      return output;
    }, {});

    dispatch(addAppointment(formData));

    formKeys.forEach(key => {
      form[key].value = '';
    });
  };

  return (
    <form
      className="editor"
      onSubmit={onSubmit}
    >
      <label>
        Title
        <br/>
        <input ref={saveRef('title')} />
      </label>
      <label className="narrow">
        Start time
        <br/>
        <input type="time" ref={saveRef('startTime')} />
      </label>
      <label className="narrow">
        End time
        <br/>
        <input type="time" ref={saveRef('endTime')} />
      </label>
      <label>
        Description
        <br/>
        <textarea ref={saveRef('description')} />
      </label>
      <button type="submit">
        Save
      </button>
      <button type="reset">
        Cancel
      </button>
    </form>
  )
};

Editor = connect()(Editor);

export default Editor;
