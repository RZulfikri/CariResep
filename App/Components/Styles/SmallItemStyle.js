import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: 193,
    borderRadius: 10,
    elevation: 1,
    margin: 5,
    backgroundColor: Colors.white
  },
  authorPhoto: {
    width: 28,
    height: 28, 
    borderRadius: 14,
    marginRight: 5
  },
  containerAuthor: {
    flexDirection: 'row', 
    height: 44,
    alignItems: 'center',
    paddingHorizontal: 15
  },
  textAuthor: {
    flex: 1,
    fontFamily: Fonts.type.asapRegular,
    fontSize: Fonts.size.small,
    color: Colors.text
  },
  photo: {
    width: 193,
    height: 136
  },
  textJudul: {
    marginTop: 7,
    flex: 1,
    fontFamily: Fonts.type.asapMedium,
    fontSize: Fonts.size.medium,
    color: Colors.text,
    paddingHorizontal: 15,
  },
  containerBotom: {
    height: 55,
    justifyContent: 'center',
  },
  boxCount: {
    width: 25,
    height: 25,
    borderRadius: 5,
    backgroundColor: Colors.green,
    marginLeft: 5, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCount: {
    flex: 1,
    fontFamily: Fonts.type.asapSemiBold,
    fontSize: Fonts.size.small,
    color: Colors.white,
    textAlignVertical: 'center'
  },
  border: {
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: 15,
    marginVertical: 5
  }
})
