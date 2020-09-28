import React from 'react';
import { 
  View, 
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';
import ValidationComponent from 'react-native-form-validator';

import Style from './LoginScreenStyle';
import MESSAGE from '../../Constants/Message';

export default class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }    
  }

  login() {
    this.validate({
      username: {
        required: true
      },
      password: {        
        required: true
      }
    })
  }

  render() {
    const { username, password } = this.state;

    return (
      <View>
        <TextInput 
          style={Style.input} 
          value={username} 
          placeholder="Tài khoản"
          onChangeText={text => this.setState({username: text})}
        />
        {this.isFieldInError('username') ? <Text style={Style.messageValidate}>{MESSAGE.USERNAME_REQUIRED}</Text> : null}

        <TextInput 
          style={Style.input} 
          value={password}
          ecureTextEntry={true}
          placeholder="Mật khẩu"
          onChangeText={text => this.setState({password: text})}
        />        
        {this.isFieldInError('password') ? <Text style={Style.messageValidate}>{MESSAGE.PASSWORD_REQUIRED}</Text> : null}

        <TouchableHighlight onPress={() => this.login()}>
          <Text>Đăng nhập</Text>
        </TouchableHighlight>
      </View>
    )
  }
}