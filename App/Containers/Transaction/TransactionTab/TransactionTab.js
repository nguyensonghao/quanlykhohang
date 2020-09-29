import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';

import TransactionItem from '../../../Components/TransactionItem/TransactionItem';

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
      <View>
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
    <View>
      <Text>Tổng tiền nạp</Text>
    </View>
  )
}