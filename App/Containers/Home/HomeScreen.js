import React, { Component } from 'react';
import { View } from 'react-native';

import Example from '../../Components/Example/ExampleComponent';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Example/>
      </View>
    )
  }
}

export default HomeScreen;