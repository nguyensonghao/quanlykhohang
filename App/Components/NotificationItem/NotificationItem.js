import React, { Component } from 'react';
import {
  View,
  Text  
} from 'react-native';
import PropTypes from 'prop-types';

import Style from './NotificationItemStyle';

class NotificationItem extends Component {
  render() {
    const { notification } = this.props;

    return (
      <View style={Style.container}>
        <Text>{notification.title}</Text>
        <Text>{notification.date}</Text>
        <Text>{notification.desc}</Text>
      </View>
    )
  }
}

export default NotificationItem;

NotificationItem.propTypes = {
  notification: PropTypes.object
}

NotificationItem.defaultProps = {
  notification: {
    title: 'Vu Thanh Trung',
    desc: 'Đơn hàng đã tạo thành công',
    date: '09:00 - 24/10/2020'
  }
}