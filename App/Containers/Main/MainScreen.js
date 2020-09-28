import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Home/HomeScreen';
import OrderScreen from '../Order/OrderScreen';
import TransactionScreen from '../Transaction/TransactionScreen';
import ProfileScreen from '../Profile/ProfileScreen';
import NotificationScreen from '../Notification/NotificationScreen';

const Tab = createBottomTabNavigator();

export default class MainScreen extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transaction" component={TransactionScreen} />
        <Tab.Screen name="Order" component={OrderScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
      </Tab.Navigator>
    )
  }
}