import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SetEmployee from '~/pages/SetEmployee';
import Operations from '~/pages/Operations';

export default createAppContainer(
  createStackNavigator(
    {
      SetEmployee: {
        screen: SetEmployee,
        navigationOptions: {
          headerShown: false,
        },
      },
      Operations: {
        screen: Operations,
        // navigationOptions: {
        //   headerShown: false,
        // },
      },
    },
    // {
    //   initialRouteName: 'SetEmployee',
    // },
  ),
);

// function Routes() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="SetEmployee" component={SetEmployee} />
//         <Stack.Screen name="Operations" component={Operations} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default Routes;
