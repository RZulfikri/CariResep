import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/BigItemStyle'
import { withNavigation } from 'react-navigation'

class BigItem extends Component {
  constructor(props) {
    super(props)
    this.onPressItem = this.onPressItem.bind(this)
  }

  onPressItem() {
    this.props.navigation.navigate('DetailResepScreen', this.props.data)
  }

  render() {
    const { author, author_photo, description, judul, photo, tag } = this.props.data
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
        </View>
        <Image source={{ uri: photo }} style={styles.resepPhoto} resizeMethod={'resize'} resizeMode={'cover'} />
        <View style={styles.contentContainer}>
          <Text style={styles.textTitle}>{judul}</Text>
          <View style={styles.border} />
          {description && <Text style={styles.textDescription} ellipsizeMode={'tail'} numberOfLines={2} >{description}</Text>}
          {description && <View style={styles.border} />}
          <View style={styles.containerTag}>
            {tag.map((item, index) => {
              return <View key={index} style={styles.tagItems}>
                <Text style={styles.tagTitle}>{item}</Text>
              </View>
            })}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default withNavigation(BigItem)
