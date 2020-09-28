import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';

import NotificationItem from '../../Components/NotificationItem/NotificationItem';

class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNoti: []
    }
  }

  componentDidMount() {
    const mocks = [];
    for (let i = 0; i < 20; i++) {
      mocks.push({
        id: i,
        title: `Thong bao ${i}`
      })
    }

    this.setState({
      listNoti: mocks
    })    
  }
  
  render() {
    const { listNoti } = this.state;

    return (
      <View>
        <FlatList          
          data={listNoti}
          renderItem={({ item, index, separators }) => (
            <TouchableHighlight
              key={item.key}
              onPress={() => this._onPress(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>              
              <NotificationItem notification={item}/>
            </TouchableHighlight>
          )}
        />
      </View>
    )
  }
}

export default NotificationScreen;