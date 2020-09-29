import React, { Component } from 'react';
import {
  View,
  Text,
  Button, Dimensions
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import {commom} from "~/Themes";
import InputDefault from '~/Components/Inputs';
import styles from './styles'
import OrderTab from '../OrderTab/OrderTab';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStl}
    style={styles.tabBarStl}
    labelStyle={styles.labelStl}
    renderLabel={({ route, focused, color }) => (
      <Text style={styles.labelStl}>
        {route.title}
      </Text>
    )}
  />
)

const renderScene = SceneMap({
  all: () => <OrderTab/>,
  pending: () => <OrderTab/>,
  reported: () => <OrderTab/>
})

export default class ListOrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { 
          key: 'all', 
          title: 'Tất cả' 
        },
        { 
          key: 'pending', 
          title: 'Chờ duyệt' 
        },
        { 
          key: 'reported', 
          title: 'Đã báo' 
        }
      ]
    }
  }
  render() {
    const { index, routes } = this.state;
    const initialLayout = { 
      width: Dimensions.get('window').width 
    }

    return (
      <View style={[commom.container, styles.container]}>
         <InputDefault
          placeholder='Tìm kiếm đơn hàng' 
          iconRight
          inputWrapStl={styles.inputSearch}
        />
        <TabView          
          renderTabBar={renderTabBar}
          style={commom.flex_1}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={index => this.setState({index})}
          initialLayout={initialLayout}
          getLabelText={({ route }) => route.title}
        />
      </View>
    )
  }
}
