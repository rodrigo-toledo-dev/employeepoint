export const setEmployee = id => ({
         type: 'SET_EMPLOYEE',
         payload: {id},
       });

export const startWork = id => ({
         type: 'START_WORK',
         payload: {id},
       });

export const stopWork = id => ({
         type: 'STOP_WORK',
         payload: {id},
       });
