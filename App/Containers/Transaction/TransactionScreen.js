import React, { Component } from 'react';
import {
  View,
  Dimensions,
  FlatList,
  Text, Image, TouchableOpacity
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from "./styles";
import Example from '../../Components/Example/ExampleComponent';
import { commom } from '../../Themes';
const DATA = [
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
];

const HeaderList = () => {
  return (
    <View>
      <Text>tien da nap</Text>
    </View>
  )
}
const Item = ({data}) => (
  <TouchableOpacity style={styles.item}>
    <Image style={styles.itemImg} source={require('../../Assets/Images/logo.png')}/>
    <View style={styles.itemCenter}>
      <Text style={styles.itemTitle}>{data.title}</Text>
      <Text style={styles.itemDetail}>{data.detail}</Text>
    </View>
    <View>
      <Text style={styles.itemCreatedAt}>{data.createdAt}</Text>
      <Text style={styles.itemMoney}>{data.money}</Text>
    </View>
  </TouchableOpacity>
);
const AllTrans = () => {

  const renderItem = ({item}) => (
    <Item data={item} />
  );
  return (
    <View>
      <HeaderList/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStl}
    style={styles.tabBarStl}
    labelStyle={styles.labelStl}
  />
);

const renderScene = SceneMap({
  all: () => <AllTrans/>,
  recharge: () => <Example/>,
  pay: () => <Example/>
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
        },
        { 
          key: 'pay', 
          title: 'Thanh toán' 
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
      <View style={[commom.container, commom.p0]}>
        <TabView
          renderTabBar={renderTabBar}
          style={{flex: 1}}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={index => this.setState({index})}
          initialLayout={initialLayout}
          getLabelText={({ route }) => route.title}
        />
      </View>
    )
  }
}

export default TransactionScreen;