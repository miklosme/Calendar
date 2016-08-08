const events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      const { id, title, startTime, endTime, description } = action;
      return [
        ...state,
        { id, title, startTime, endTime, description }
      ];
    default:
      return state
  }
};

export default events;
