import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SCREEN } from '../../Services/NavigationService';
import CreateOrderScreen from './CreateOrder/CreateOrderScreen';
import EditOrderScreen from './EditOrder/EditOrderScreen';
import DetailOrderScreen from './DetailOrder/DetailOrderScreen';
const Stack = createStackNavigator();

export default class OrderStackScreen extends Component {
  render() {
    return (
      <Stack.Navigator>        
        <Stack.Screen
          name={SCREEN.CREATE_ORDER.NAME}
          component={CreateOrderScreen}
          options={{ 
            title: SCREEN.CREATE_ORDER.TITLE
          }}
        />
        <Stack.Screen
          name={SCREEN.EDIT_ORDER.NAME}
          component={EditOrderScreen}
          options={{ 
            title: SCREEN.EDIT_ORDER.TITLE
          }}
        />
        <Stack.Screen
          name={SCREEN.DETAIL_ORDER.NAME}
          component={DetailOrderScreen}
          options={{ 
            title: SCREEN.DETAIL_ORDER.TITLE
          }}
        />
      </Stack.Navigator>
    )
  }
}
