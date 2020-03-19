const INTIAL_STATE = {
  employee: null
};

export default function SetEmployee(state = INTIAL_STATE, action) {
  switch (action.type) {
      case 'SET_EMPLOYEE':
        return { ...state, employee: action.payload.employee}
    default:
      return state;
  }
}
