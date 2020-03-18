import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SetEmployee from '~/pages/SetEmployee';
import Operations from '~/pages/Operations';

const Navigation = createSwitchNavigator({
    SetEmployee: {
      screen: SetEmployee,
    },
    Operations: {
      screen: Operations,
    },
  });

const Routes = createAppContainer(Navigation)
export default Routes;
