const events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    default:
      return state
  }
};

export default events;
