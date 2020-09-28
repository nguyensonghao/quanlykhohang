import React, { Component } from 'react';
import {
  View,
  Text  
} from 'react-native';
import PropTypes from 'prop-types';

import Style from './NotificationItemStyle';

class NotificationItem extends Component {
  render() {
    return (
      <View style={Style.container}>
        <Text>Xin chao</Text>
      </View>
    )
  }
}

export default NotificationItem;

NotificationItem.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  date: PropTypes.string
}