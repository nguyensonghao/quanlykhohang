import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './App/Containers/Login/LoginScreen';
import MainScreen from './App/Containers/Main/MainScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
        /> */}
        <Stack.Screen
          name="Main"
          component={MainScreen}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
