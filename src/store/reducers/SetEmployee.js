const INITIAL_STATE = {
  employee: null,
  operations: []
};

export default function SetEmployee(state = INITIAL_STATE, action) {
  switch (action.type) {
      case 'SET_EMPLOYEE':
        return { ...state, employee: action.payload.employee}
    default:
      return state;
  }
}
