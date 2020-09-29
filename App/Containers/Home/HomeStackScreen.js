import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import { SCREEN } from '../../Services/NavigationService';
const Stack = createStackNavigator();

export default class HomeStackScreen extends Component {
  render() {
    return (
      <Stack.Navigator>        
        <Stack.Screen
          name='test'
          component={HomeScreen}
          options={{ 
            headerShown: false,
            title: SCREEN.HOME.TITLE
          }}
        />
      </Stack.Navigator>
    )
  }
}
