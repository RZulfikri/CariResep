import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/HeaderStyle'
import { Images } from '../Themes'
import { withNavigation } from 'react-navigation'

class Header extends Component {
  constructor(props) {
    super(props)
    this.onPressFav = this.onPressFav.bind(this)
    this.onPressRiwayat = this.onPressRiwayat.bind(this)
    this.onPressBack = this.onPressBack.bind(this)
  }

  onPressBack() {
    this.props.navigation.goBack()
  }

  onPressFav() {
    this.props.navigation.navigate('ArsipResepScreen')
  }

  onPressRiwayat() {
    this.props.navigation.navigate('RiwayatPencarianScreen')
  }

  render() {
    const { title, position, showMenu, back, navigation } = this.props
    let titleStyle = position === 'left' ? styles.titleLeft : styles.titleRight
    return (
      <View style={styles.container}>
        {back && <TouchableOpacity onPress={this.onPressBack} activeOpacity={0.8} style={styles.iconBackContainer}>
          <Image source={Images.iconBack} style={styles.iconBack} />
        </TouchableOpacity>}
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={titleStyle}>{title}</Text>
        </View>
        {showMenu && <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.onPressRiwayat} activeOpacity={0.8} style={{ marginRight: 8, justifyContent: 'center' }}>
            <Image source={Images.iconRiwayat} style={{width: 35, height: 35}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressFav} activeOpacity={0.8} style={{ marginLeft: 8, justifyContent: 'center' }}>
            <Image source={Images.iconFav} style={{width: 24.32, height: 30}} />
          </TouchableOpacity>
        </View>}
      </View>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  position: PropTypes.oneOf(['right', 'left']),
  back: PropTypes.bool,
  showMenu: PropTypes.bool,
  navigation: PropTypes.object.isRequired
}

Header.defaultProps = {
  title: '',
  position: 'right',
  back: true,
  showMenu: false
}

export default Header