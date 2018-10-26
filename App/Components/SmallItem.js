import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/SmallItemStyle'
import { withNavigation } from 'react-navigation'

class SmallItem extends Component {
  constructor(props) {
    super(props)
    this.onPressItem = this.onPressItem.bind(this)
  }

  onPressItem() {
    this.props.navigation.navigate('DetailResepScreen', this.props.data)
  }

  render() {
    const { author, author_photo, judul, match_count, photo } = this.props.data
    return (
      <TouchableOpacity onPress={this.onPressItem} activeOpacity={0.9} style={styles.container}>
        <View style={styles.containerAuthor}>
          <Image
            source={{ uri: author_photo }}
            style={styles.authorPhoto}
            resizeMethod={'resize'}
            resizeMode={'cover'}
          />
          <Text style={styles.textAuthor} ellipsizeMode={'tail'} numberOfLines={1}>{author}</Text>
          <View style={styles.boxCount}>
            <Text style={styles.textCount}>{match_count}</Text>
          </View>
        </View>
        <Image
          source={{ uri: photo }}
          style={styles.photo}
          resizeMethod={'resize'}
          resizeMode={'cover'}
        />
        <View style={styles.containerBotom}>
          <Text style={styles.textJudul} ellipsizeMode={'tail'} numberOfLines={2}>{judul}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default withNavigation(SmallItem)
