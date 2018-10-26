import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  textLabel: {
    fontFamily: Fonts.type.asapMedium,
    color: Colors.text,
    fontSize: Fonts.size.regular
  }
})
