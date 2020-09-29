import { StyleSheet } from 'react-native'
import { Colors } from './index';

export default StyleSheet.create({  
  safeArea: {
    flex: 1, 
  },
  flex_1: {
    flex: 1, 
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  p0: {
    padding: 0,
    paddingVertical: 0,
    paddingHorizontal: 0
  },

  green: {
    color: Colors.green
  },
  blue: {
    color: Colors.blue
  }
})