import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import Menu from './Menu/MenuComponent';
import WebviewCustom from '../../Components/WebviewCustom/WebviewCustomComponent';
import CodeInformationModal from '../../Components/CodeInformationModal/CodeInformationModal';
import PaymentInformationModal from '../../Components/PaymentInfomationModal/PaymentInformationModal';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowWebview: false,
      isShowPayment: false,
      isShowCode: false,
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

  scanCode() {

  }

  redirect(page) {
    this.props.navigation.navigate(page);
  }

  render() {
    const { isShowWebview, url, isShowPayment, isShowCode } = this.state;

    return (
      <View style={{flex: 1}}>
        <TouchableHighlight onPress={() => this.openWebview()}>
          <Text>Click to open webview</Text>
        </TouchableHighlight>

        <Menu
          scanCode={() => this.setState({isShowCode: true})}
          payment={() => this.setState({isShowPayment: true})}
          redirectScreen={(page) => this.redirect(page)}
        />
        
        <WebviewCustom 
          url={url} 
          isShow={isShowWebview} 
          close={() => this.closeWebview()}
        />

        <PaymentInformationModal 
          isShow={isShowPayment}
        />

        <CodeInformationModal 
          isShow={isShowCode}
        />
      </View>      
    )
  }
}

export default HomeScreen;