import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingBottom: 10
  },
  mainContainer: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.border2,
    backgroundColor: Colors.white,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    flex: 1,
    color: Colors.text,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.asapRegular,
    height: 50,
    textAlignVertical: 'center'
  },
  iconClose: {
    width: 15,
    height: 15,
    tintColor: Colors.grey
  }
})
