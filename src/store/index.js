import { createStore } from 'redux';

import axios from 'axios';

// const resetData = employee => {
//   setEmployee(employee);
//   setOperation(false);
//   setOperations(false);
// };

const INTIAL_STATE = [{id: 0, name: 'Nathalie'}, {id: 1, name: 'Izabele'}];

function reducer(state = INTIAL_STATE, action){
  if (action.type === 'RESET_DATA') {
    // resetData(action.employee);
  }
}

const store = createStore(reducer);

export default store;
