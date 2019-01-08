import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/SmallItemStyle'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import ResepActions from '../Redux/ResepRedux'

class SmallItem extends Component {
  constructor(props) {
    super(props)
    this.onPressItem = this.onPressItem.bind(this)
  }

  onPressItem() {
    this.props.detailResep({ id_resep: this.props.data.id_resep })
    this.props.navigation.navigate('DetailResepScreen', this.props.data)
  }

  render() {
    const { author, author_photo, judul, match_count, photo } = this.props.data
    return (
      <TouchableOpacity onPress={this.onPressItem} activeOpacity={0.9} style={styles.container}>
        <View style={styles.containerAuthor}>
          <View style={styles.authorPhoto}>
            {author_photo && <Image
              source={{ uri: author_photo }}
              style={styles.authorPhoto}
              resizeMethod={'resize'}
              resizeMode={'cover'}
            />}
          </View>
          <Text style={styles.textAuthor} ellipsizeMode={'tail'} numberOfLines={1}>{author}</Text>
          <View style={styles.boxCount}>
            <Text style={styles.textCount}>{match_count}</Text>
          </View>
        </View>
        <View style={styles.photo}>
          {photo && <Image
            source={{ uri: photo }}
            style={styles.photo}
            resizeMethod={'resize'}
            resizeMode={'cover'}
          />}
        </View>
        <View style={styles.containerBotom}>
          <Text style={styles.textJudul} ellipsizeMode={'tail'} numberOfLines={2}>{judul}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    detailResep: (params) => dispatch(ResepActions.detailResepRequest(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(SmallItem))
