export const StartWork = id => ({
  type: 'START_WORK',
  payload: {id},
});

export const StopWork = id => ({
  type: 'STOP_WORK',
  payload: {id},
});
