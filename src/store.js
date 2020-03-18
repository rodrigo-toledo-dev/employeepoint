import { createStore } from 'redux';

const INITIAL_EMPLOYEES = [
    {
      id: 0,
      name: 'Nathalie',
      imageProfile: require('~/assets/Nathalie.jpg'),
    },
    {
      id: 1,
      name: 'Izabele',
      imageProfile: require('~/assets/Izabele.jpg'),
    },
  ];

function reducer(state = INITIAL_EMPLOYEES, action) {
  console.tron.log(action)
  return state;
}

const store = createStore(reducer);

export default store;
