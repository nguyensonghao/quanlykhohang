import React, {PureComponent} from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class InputDefault extends PureComponent {

  render() {
    const {hasError, textError,...prop} = this.props
    return (
      <View style={styles.container}>
         <TextInput 
          style={[styles.input]} 
        />
        {
          hasError ? <Text style={styles.error}>{}</Text> : null
        }
      </View>
    )
  }
}

export default InputDefault;