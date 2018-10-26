import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  textLabelInfo: {
    fontFamily: Fonts.type.asapSemiBold,
    fontSize: Fonts.size.medium,
    color: Colors.grey
  },
  textLabelBahan: {
    fontFamily: Fonts.type.asapBold,
    fontSize: Fonts.size.medium,
    color: Colors.green
  }
})
