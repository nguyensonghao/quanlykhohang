import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SCREEN } from '~/Services/NavigationService';
import HomeStackScreen from '~/Containers/Home/HomeStackScreen';
import OrderStackScreen from '~/Containers/Order/OrderStackScreen';
import TransactionStackScreen from '~/Containers/Transaction/TransactionStackScreen';
import ProfileStackScreen from '~/Containers/Profile/ProfileStackScreen';
import NotificationStackScreen from '~/Containers/Notification/NotificationStackScreen';

const Tab = createBottomTabNavigator();

export default class MainScreen extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen 
          name={SCREEN.HOME.TITLE} 
          component={HomeStackScreen}           
          options={{
            title: 'Trang chủ'
          }}
        />
        <Tab.Screen 
          name={SCREEN.TRANSACTION.TITLE} 
          component={TransactionStackScreen} 
          options={{
            title: 'Giao dịch'
          }}
        />
        <Tab.Screen 
          name={SCREEN.ORDER.TITLE} 
          component={OrderStackScreen} 
          options={{
            title: 'Tạo đơn'
          }}
        />
        <Tab.Screen 
          name={SCREEN.PROFILE.TITLE} 
          component={ProfileStackScreen} 
          options={{
            title: 'Cá nhân'
          }}
        />
        <Tab.Screen 
          name={SCREEN.LIST_NOTIFICATION.TITLE} 
          component={NotificationStackScreen} 
          options={{
            title: 'Thông báo'
          }}
        />
      </Tab.Navigator>
    )
  }
}