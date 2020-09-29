import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SCREEN } from '~/Services/NavigationService';
import { commom } from '~/Themes';
import NotificationItem from '~/Components/NotificationItem/NotificationItem';

class ListNotificationScreen extends Component {
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
        id: i.toString(),
        title: `Thong bao ${i}`
      })
    }

    this.setState({
      listNoti: mocks
    })    
  }

  viewNotification(notification) {
    this.props.navigation.navigate(SCREEN.DETAIL_NOTIFICATION.NAME, {
      id: notification.id
    })
  }
  
  render() {
    const { listNoti } = this.state;

    return (
      <SafeAreaView style={commom.safeArea}>
        <View style={[commom.container, commom.p0]}>

        <FlatList          
          data={listNoti}
          renderItem={({ item, index, separators }) => (
            <TouchableHighlight
              key={item.key}
              onPress={() => this.viewNotification(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              <NotificationItem/>
            </TouchableHighlight>
          )}
        />
        </View>

      </SafeAreaView>
    )
  }
}

export default ListNotificationScreen;