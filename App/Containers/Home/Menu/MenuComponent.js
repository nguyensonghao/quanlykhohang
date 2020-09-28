import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import { SCREEN_NAME } from '../../../Services/NavigationService';
import Style from './MenuComponentStyle';

class Menu extends Component {
  payment() {

  }

  scanCode() {
    
  }

  render() {
    return (
      <View style={Style.container}>
        <TouchableHighlight style={Style.menuItem} onPress={() => this.props.payment()}>
          <Text>Nạp tiền</Text>
        </TouchableHighlight>
        <TouchableHighlight style={Style.menuItem} onPress={() => this.props.scanCode()}>
          <Text>Quét mã</Text>
        </TouchableHighlight>
        <TouchableHighlight style={Style.menuItem} onPress={() => this.props.redirectScreen(SCREEN_NAME.ORDER)}>
          <Text>Đơn hàng</Text>
        </TouchableHighlight>
        <TouchableHighlight style={Style.menuItem} onPress={() => this.props.redirectScreen(SCREEN_NAME.TRANSACTION)}>
          <Text>Giao dịch</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Menu;

Menu.propTypes = {
  redirectScreen: PropTypes.func,
  payment: PropTypes.func,
  scanCode: PropTypes.func
}