export const startWork = id => ({
  type: 'START_WORK',
  payload: {id},
});

export const stopWork = id => ({
  type: 'STOP_WORK',
  payload: {id},
});
