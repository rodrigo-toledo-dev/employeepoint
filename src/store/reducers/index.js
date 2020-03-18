const INTIAL_STATE = [
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
  {
    id: 2,
    name: 'Izabele',
    imageProfile: require('~/assets/Izabele.jpg'),
  },
];

export default function reducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case 'SET_EMPLOYEE':
      return state;
      break;
    default:
      return state;
  }
}
