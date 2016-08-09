import React from 'react';
import {integerTimeToString} from '../utils';

const Editor = ({ onChange, onSave, onCancel, id, title, startTime, endTime, description }) => {
console.log(startTime);
  const onSubmit = event => {
    event.preventDefault();
    onSave();
  };

  return (
    <form
      className="editor"
      onSubmit={onSubmit}
      onReset={() => onCancel(id)}
    >
      <label>
        Title
        <br/>
        <input
          type="text"
          value={title}
          onChange={onChange('title')}
          required
        />
      </label>
      <label>
        Start time
        <br/>
        <input
          type="time"
          value={integerTimeToString(startTime)}
          onChange={onChange('startTime')}
          required
        />
      </label>
      <label>
        End time
        <br/>
        <input
          type="time"
          value={integerTimeToString(endTime)}
          onChange={onChange('endTime')}
          required
        />
      </label>
      <label>
        Description
        <br/>
        <textarea
          onChange={onChange('description')}
          required
          value={description}
        />
      </label>
      <button type="submit">
        Save
      </button>
      <button type="reset">
        {id ? 'Delete' : 'Cancel'}
      </button>
    </form>
  )
};

export default Editor;
