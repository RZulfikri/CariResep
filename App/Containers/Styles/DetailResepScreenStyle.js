import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors } from '../../Themes/'
import { Scale } from '../../Transforms/Scale';

export default StyleSheet.create({
  photoResep: {
    width: Scale(375),
    height: Scale(266)
  },
  containerMain: {
    paddingHorizontal: 20
  },
  authorPhoto: {
    width: 28,
    height: 28, 
    borderRadius: 14,
    marginRight: 5
  },
  containerTop: {
    flexDirection: 'row', 
    height: 44,
    alignItems: 'center',
  },
  containerTag: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    marginVertical: 12
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
  containerBahan: {
    paddingVertical: 13,
  },
  textAuthor: {
    flex: 1,
    fontFamily: Fonts.type.asapMedium,
    fontSize: Fonts.size.small,
    color: Colors.text
  },
  textJudul: {
    flex: 1,
    fontFamily: Fonts.type.asapSemiBold,
    fontSize: Fonts.size.regular,
    color: Colors.text
  },
  textLabel: {
    flex: 1,
    fontFamily: Fonts.type.asapSemiBold,
    fontSize: Fonts.size.small,
    color: Colors.text
  },
  containerTitle: {
    paddingVertical: 7
  }, 
  containerDescription: {
    paddingVertical: 15
  },
  textReguler: {
    // flex: 1,
    fontFamily: Fonts.type.asapRegular,
    fontSize: Fonts.size.small,
    color: Colors.text
  },
  border: {
    height: 1,
    backgroundColor: Colors.border,
  },
  imageLangkah: {
    width: 125,
    height: 100,
    borderRadius: 10
  },
  ...ApplicationStyles.screen
})
