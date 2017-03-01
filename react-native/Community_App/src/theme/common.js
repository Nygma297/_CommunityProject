/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_BACKGROUND_COLOR, TEXT_COLOR, TEXT_SIZE, LIGHT_TEXT_COLOR } from './colors'
var Dimensions = require('Dimensions');
var {
  width,
  height
} = Dimensions.get("window");

const styles = StyleSheet.create({
  text: {
    fontSize: TEXT_SIZE,
    color: TEXT_COLOR,
  },
  lightText: {
  	fontSize: TEXT_SIZE,
    color: LIGHT_TEXT_COLOR,
  },
  sectionContainer: {
    alignItems: 'center',
    margin: 10,
    width: width
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D4D4D'
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default styles



// const commonStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   appArea: {
//     flex: 8,
//     //backgroundColor: '#F5FC00',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   menuArea: {
//     flex: 1,
//     //backgroundColor: '#F500FF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// module.exports = commonStyles;