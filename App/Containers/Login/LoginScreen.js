import React from 'react';
import { 
  View, 
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';
import ValidationComponent from 'react-native-form-validator';

import Style from './LoginScreenStyle';

export default class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }    
  }

  login() {
    if (!this.validate({
      username: {
        required: true
      },
      password: {
        minlength: 6, 
        maxlength: 32, 
        required: true
      }
    })) {
      return true;
    }
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
        {this.isFieldInError('username') && this.getErrorsInField('username').map(errorMessage => 
          <Text style={Style.messageValidate}>{errorMessage}</Text>
        )}

        <TextInput 
          style={Style.input} 
          value={password}
          ecureTextEntry={true}
          placeholder="Mật khẩu"
          onChangeText={text => this.setState({password: text})}
        />
        {this.isFieldInError('password') && this.getErrorsInField('password').map(errorMessage => 
          <Text style={Style.messageValidate}>{errorMessage}</Text>
        )}

        <TouchableHighlight onPress={() => this.login()}>
          <Text>Đăng nhập</Text>
        </TouchableHighlight>        
      </View>
    )
  }
}