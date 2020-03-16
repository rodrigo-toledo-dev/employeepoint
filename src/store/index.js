import { createStore } from 'redux';

const resetData = employee => {
  setEmployee(employee);
  setOperation(false);
  setOperations(false);
};

const INTIAL_STATE = ['Fazer Cafe', 'Estudar'];

function reducer(state = INTIAL_STATE, action){
  if (action.type === 'RESET_DATA') {
    resetData(action.employee);
  }
}

const store = createStore(reducer);

export default store;
