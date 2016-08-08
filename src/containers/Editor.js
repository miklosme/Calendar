import React from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions';

let Editor = ({ dispatch }) => {
  const form = {};
  const saveRef = key => ref => {
    form[key] = ref;
  };

  const onSubmit = event => {
    event.preventDefault();

    if (!form.title.value.trim()) {
      return;
    }

    dispatch(addEvent(form.title.value));

    form.title.value = '';
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
        <input type="time" ref={saveRef('start-time')} />
      </label>
      <label className="narrow">
        End time
        <br/>
        <input type="time" ref={saveRef('end-time')} />
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
