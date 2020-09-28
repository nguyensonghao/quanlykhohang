import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Style from './SliderComponentStyle';
import ProductItem from '../../../Components/ProductItem/ProductItem';

export default class Slider extends Component {
  renderSlider() {
    const { listProduct } = this.props;
    return listProduct.map((item) => {
      return <ProductItem showDetail={(product) => this.props.showProduct(product)} key={item.id} product={item} />      
    })
  }

  render() {
    const { title } = this.props;

    return (
      <View style={Style.container}>
        <View style={Style.header}>
          <Text>{title}</Text>
          <TouchableHighlight onPress={() => this.props.seeMore()}>
            <Text>Xem thêm</Text>
          </TouchableHighlight>
        </View> 

        <ScrollView style={Style.slider} horizontal={true}>
          {this.renderSlider()}
        </ScrollView>        
      </View>
    )
  }
}

Slider.Slider = {
  title: PropTypes.string,
  listProduct: PropTypes.array,
  seeMore: PropTypes.func,
  showProduct: PropTypes.func
}