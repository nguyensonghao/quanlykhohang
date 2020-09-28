import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SCREEN } from './App/Services/NavigationService';
import LoginScreen from './App/Containers/Login/LoginScreen';
import MainScreen from './App/Containers/Main/MainScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen
          name={SCREEN.MAIN.NAME}
          component={MainScreen}
          options={{ 
            title: SCREEN.MAIN.TITLE
          }}
        />
        <Stack.Screen
          name={SCREEN.LOGIN.NAME}
          component={LoginScreen}
          options={{ 
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
