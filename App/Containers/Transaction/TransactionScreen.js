import React, { Component } from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import Example from '../../Components/Example/ExampleComponent';

const renderScene = SceneMap({
  all: () => <Example/>,
  recharge: () => <Example/>
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
      <View style={{flex: 1}}>
        <TabView
          style={{flex: 1}}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={index => this.setState({index})}
          initialLayout={initialLayout}
        />
      </View>
    )
  }
}

export default TransactionScreen;