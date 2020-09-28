import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SCREEN } from '../../Services/NavigationService';
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
        <Tab.Screen 
          name={SCREEN.HOME.TITLE} 
          component={HomeScreen} 
          navigationOptions={{
            header: {
              visible: true
            }
          }}
          options={{
            title: 'Trang chủ'
          }}
        />
        <Tab.Screen 
          name={SCREEN.TRANSACTION.TITLE} 
          component={TransactionScreen} 
          options={{
            title: 'Giao dịch'
          }}
        />
        <Tab.Screen 
          name={SCREEN.ORDER.TITLE} 
          component={OrderScreen} 
          options={{
            title: 'Tạo đơn'
          }}
        />
        <Tab.Screen 
          name={SCREEN.PROFILE.TITLE} 
          component={ProfileScreen} 
          options={{
            title: 'Cá nhân'
          }}
        />
        <Tab.Screen 
          name={SCREEN.NOTIFICATION.TITLE} 
          component={NotificationScreen} 
          options={{
            title: 'Thông báo'
          }}
        />
      </Tab.Navigator>
    )
  }
}