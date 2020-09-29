import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import Style from './TransactionItemStyle';

export default class TransactionItem extends Component {
  render() {
    const { transaction } = this.props;

    return (      
      <TouchableOpacity style={Style.item}>
        <Image style={Style.itemImg} source={require('../../Assets/Images/logo.png')}/>
        <View style={Style.itemCenter}>
          <Text style={Style.itemTitle}>{transaction.title}</Text>
          <Text style={Style.itemDetail}>{transaction.detail}</Text>
        </View>
        <View>
          <Text style={Style.itemCreatedAt}>{transaction.createdAt}</Text>
          <Text style={Style.itemMoney}>{transaction.money}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

TransactionItem.propTypes = {
  transaction: PropTypes.object,
  showDetail: PropTypes.func
}