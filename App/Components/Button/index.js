import React, {PureComponent} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class InputDefault extends PureComponent {

  render() {
    const {containerStl, text, textStl, ...prop} = this.props
    return (
      <TouchableOpacity style={[styles.container, containerStl]}>
         <Text style={[styles.text, textStl]}>{text}</Text>
         {this.props.children}
      </TouchableOpacity>
    )
  }
}

export default InputDefault;