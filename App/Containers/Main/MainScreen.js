import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SCREEN_NAME } from '../../Services/NavigationService';
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
          name={SCREEN_NAME.HOME} 
          component={HomeScreen} 
          options={
            {
              title: 'Trang chủ'
            }
          }
        />
        <Tab.Screen 
          name={SCREEN_NAME.TRANSACTION} 
          component={TransactionScreen} 
          options={
            {
              title: 'Giao dịch'
            }
          }
        />
        <Tab.Screen 
          name={SCREEN_NAME.ORDER} 
          component={OrderScreen} 
          options={
            {
              title: 'Tạo đơn'
            }
          }
        />
        <Tab.Screen 
          name={SCREEN_NAME.PROFILE} 
          component={ProfileScreen} 
          options={
            {
              title: 'Cá nhân'
            }
          }
        />
        <Tab.Screen 
          name={SCREEN_NAME.NOTIFICATION} 
          component={NotificationScreen} 
          options={
            {
              title: 'Thông báo'
            }
          }
        />
      </Tab.Navigator>
    )
  }
}