import { StyleSheet } from 'react-native'
import { Header } from 'react-navigation'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    height: Header.HEIGHT,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  titleLeft: {
    fontFamily: Fonts.type.asapBold,
    fontSize: Fonts.size.headerTitle1,
    color: Colors.orange,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  titleRight: {
    fontFamily: Fonts.type.asapBold,
    fontSize: Fonts.size.headerTitle2,
    color: Colors.orange,
    textAlign: 'right',
    textAlignVertical: 'center',
    paddingLeft: 5
  },
  iconBack: {
    width: 15,
    height: 25.53
  },
  iconBackContainer: {
    width: 25.53,
    height: 25.53
  },
  iconMenu: {
    width: 40,
    height: 40
  }
})
