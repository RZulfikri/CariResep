import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 5,
    flexDirection: 'row'
  },
  labelSelected: {
    color: Colors.green,
    fontFamily: Fonts.type.asapMedium
  },
  label: {
    flex: 1,
    color: Colors.text,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.asapRegular
  },
  iconRemove: {
    width: 13,
    height: 13,
    tintColor: Colors.grey
  }
})
