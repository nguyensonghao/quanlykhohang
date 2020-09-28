import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import WebviewCustom from '../../Components/WebviewCustom/WebviewCustomComponent';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowWebview: false,
      url: 'https://reactnative.dev/'
    }
  }

  closeWebview() {
    this.setState({
      isShowWebview: false
    })
  }
  
  openWebview() {
    this.setState({
      isShowWebview: true
    })
  }

  render() {
    const { isShowWebview, url } = this.state;

    return (
      <View style={{flex: 1}}>
        <TouchableHighlight onPress={() => this.openWebview()}>
          <Text>Click to open webview</Text>
        </TouchableHighlight>
        
        <WebviewCustom 
          url={url} 
          isShow={isShowWebview} 
          close={() => this.closeWebview()}
        />
      </View>      
    )
  }
}

export default HomeScreen;