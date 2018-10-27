import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    // height: 40,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  containerMain: {
    alignItems: 'center',
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
  },
  textDate: {
    flex: 1,
    color: Colors.text,
    fontSize: Fonts.size.tiny,
    fontFamily: Fonts.type.asapRegular
  }
})
