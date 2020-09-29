import React from 'react';
import { 
  View, 
  Text,
  TextInput,
  Image
} from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WEBSITE } from '../../Constants/Config';
import MESSAGE from '../../Constants/Message';
import { Colors, commom } from "../../Themes";
import styles from "./styles";
import ButtonDefault from "../../Components/Button";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }    
  }
  test = () => {
    alert('werwer');
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
      <SafeAreaView style={commom.safeArea}>
        <KeyboardAwareScrollView contentContainerStyle={commom.flex_1}>
          <View style={[commom.container]}>
          <View style={styles.logoWrap}>
            <Image style={styles.logo} source={require('../../Assets/Images/logo.png')}/>
          </View>
          <View style={styles.inputWrap}>
            <TextInput 
              placeholderTextColor={Colors.placeholder}
              style={styles.input} 
              value={username} 
              placeholder="Tên đăng nhập"
              onChangeText={text => this.setState({username: text})}
            />
            {this.isFieldInError('username') ? <Text style={styles.errorText}>{MESSAGE.USERNAME_REQUIRED}</Text> : null}
          </View>
          <View style={styles.inputWrap}>
            <TextInput 
              placeholderTextColor={Colors.placeholder}
              style={styles.input} 
              value={password}
              ecureTextEntry={true}
              placeholder="Mật khẩu"
              onChangeText={text => this.setState({password: text})}
            />        
            {this.isFieldInError('password') ? <Text style={styles.errorText}>{MESSAGE.PASSWORD_REQUIRED}</Text> : null}
          </View>
          <ButtonDefault 
            text="Đăng nhập" 
            onPress={() => {this.login()}}
            containerStl={styles.btnLogin}
          />
          <Text style={styles.textSmall}>
            Dùng tài khoản 
            <Text style={styles.textBold}> {WEBSITE.NAME} </Text>
            để đăng nhập
            </Text>
        </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
   
    )
  }
}