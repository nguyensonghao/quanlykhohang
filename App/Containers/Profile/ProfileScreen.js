import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class ProfileScreen extends Component {
  changePassword() {
    this.props.navigation.navigate('ChangePasswordScreen');
  }

  render() {
    return (
      <View>
        <Text>ProfileScreen</Text>
        <TouchableHighlight onPress={() => this.changePassword()}>
          <Text>Change password</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default ProfileScreen;