import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  loadingText: {
    fontFamily: Fonts.type.asapMedium,
    fontSize: Fonts.size.input,
    color: Colors.grey
  }, 
  textInfo: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.input,
    color: Colors.grey
  },
  ...ApplicationStyles.screen
})
