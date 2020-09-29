import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from "./styles";
import { commom } from '../../Themes';
import TransactionTab from './TransactionTab/TransactionTab';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStl}
    style={styles.tabBarStl}
    labelStyle={styles.labelStl}
    renderLabel={({ route, focused, color }) => (
      <Text>
        {route.title}
      </Text>
    )}
  />
)

const renderScene = SceneMap({
  all: () => <TransactionTab/>,
  recharge: () => <TransactionTab/>,
  pay: () => <TransactionTab/>
})

class TransactionScreen extends Component {
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
          key: 'recharge', 
          title: 'Nạp tiền' 
        },
        { 
          key: 'pay', 
          title: 'Thanh toán' 
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
      <View style={[commom.container, commom.p0]}>
        <TabView          
          renderTabBar={renderTabBar}
          style={{flex: 1}}
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

export default TransactionScreen;