import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: Colors.white,
    elevation: 2
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
  resepPhoto: {
    height: 266,
    width: '100%'
  },
  contentContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  border: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 10
  },
  textTitle: {
    fontFamily: Fonts.type.asapSemiBold,
    fontSize: Fonts.size.medium,
    color: Colors.text
  },
  textDescription: {
    fontFamily: Fonts.type.asapRegular,
    fontSize: Fonts.size.small,
    color: Colors.text
  },
  containerTag: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  },
  tagItems: {
    height: 25,
    borderRadius: 10,
    backgroundColor: Colors.green,
    paddingHorizontal: 12,
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: 5
  },
  tagTitle: {
    fontFamily: Fonts.type.asapRegular,
    fontSize: Fonts.size.small,
    color: Colors.white
  },
})
