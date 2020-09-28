import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SCREEN_NAME } from './App/Services/NavigationService';
import LoginScreen from './App/Containers/Login/LoginScreen';
import MainScreen from './App/Containers/Main/MainScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen
          name={SCREEN_NAME.MAIN}
          component={MainScreen}
        />
        <Stack.Screen
          name={SCREEN_NAME.LOGIN}
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
