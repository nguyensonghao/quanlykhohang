import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';

import TransactionItem from '../../../Components/TransactionItem/TransactionItem';
import styles from './TransactionTabStyle';
import { commom } from '../../../Themes';

class TransactionTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTransaction: []
    }
  }

  componentDidMount() {
    this.setState({
      listTransaction: [
        {
          id: '1',
          title: 'First Item',
          detail: 'thanh toan abc',
          createdAt: '20/10/2020',
          money: '2500000'
        },
        {
          id: '2',
          title: 'First Item',
          detail: 'thanh toan abc',
          createdAt: '20/10/2020',
          money: '2500000'
        },
        {
          id: '3',
          title: 'First Item',
          detail: 'thanh toan abc',
          createdAt: '20/10/2020',
          money: '2500000'
        },
      ]
    })
  }

  render() {
    const { listTransaction } = this.state;    

    const renderItem = ({item}) => (
      <TransactionItem transaction={item} />
    )
  
    return (
      <View style={commom.flex_1}>
        <HeaderList/>
        <FlatList
          data={listTransaction}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

export default TransactionTab;

TransactionTab.propTypes = {
  title: PropTypes.string
}

const HeaderList = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.colLeft}>
        <Text style={styles.textTitle}>Tổng tiền đã nạp</Text>
        <Text style={[styles.number, commom.blue]}>5000000000đ</Text>
      </View>
      <View style={styles.colRight}>
        <Text style={styles.textTitle}>Số dư</Text>
        <Text style={[styles.number, commom.green]}>20.000.000.000đ</Text>
      </View>
    </View>
  )
}