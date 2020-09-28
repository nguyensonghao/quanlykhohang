import React, { Component } from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import Style from './TransactionItemStyle';

export default class TransactionItem extends Component {
  render() {
    const { transaction } = this.props;

    return (
      <View>
        <Image source={{uri: transaction.logo}} style={Style.logo}/>
        <Text>{transaction.code} - {transaction.title}</Text>
        <Text>{transaction.desc}</Text>
      </View>
    )
  }
}

TransactionItem.propTypes = {
  transaction: PropTypes.object,
  showDetail: PropTypes.func
}

TransactionItem.defaultProps = {
  transaction: {
    logo: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    code: '#0001',
    title: 'Vu Thanh Trung',
    desc: 'Nạp tiền vào ví'
  }
}