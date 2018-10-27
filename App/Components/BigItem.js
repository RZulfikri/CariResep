import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from './Styles/BigItemStyle'
import { withNavigation } from 'react-navigation'
import { Images, Colors } from '../Themes';
import { connect } from 'react-redux'

import FavActions from '../Redux/FavoritRedux'

class BigItem extends PureComponent {
  constructor(props) {
    super(props)

    const isFav = props.favList.includes(props.data.id_resep)

    this.state = {
      isFav
    }
    this.onPressItem = this.onPressItem.bind(this)
    this.onPressFav = this.onPressFav.bind(this)
  }

  onPressItem() {
    this.props.navigation.navigate('DetailResepScreen', this.props.data)
  }

  onPressFav() {
    this.props.toogleFav({ id: this.props.data.id_resep, data: this.props.data })
  }

  componentWillReceiveProps(nextProps) {
    const { favList } = nextProps
    const isFav = favList.includes(this.props.data.id_resep)
    if (isFav !== this.state.isFav) {
      this.setState({ isFav })
    }
  }

  render() {
    const { author, author_photo, description, judul, photo, tag } = this.props.data
    const { favItem } = this.props
    const { isFav } = this.state
    return (
      <TouchableOpacity onPress={this.onPressItem} activeOpacity={0.9} style={styles.container}>
        <TouchableWithoutFeedback>
          <View style={styles.containerAuthor}>
            <Image
              source={{ uri: author_photo }}
              style={styles.authorPhoto}
              resizeMethod={'resize'}
              resizeMode={'cover'}
            />
            <Text style={styles.textAuthor} ellipsizeMode={'tail'} numberOfLines={1}>{author}</Text>
            <TouchableOpacity onPress={this.onPressFav} activeOpacity={0.7} style={{ marginLeft: 8, justifyContent: 'center' }}>
              {favItem ? <Image source={Images.iconFav} style={[{ width: 24.32, height: 30 }]} />
                : <Image source={isFav ? Images.iconFav : Images.iconFavOutline} style={[{ width: 24.32, height: 30 }, !isFav && { tintColor: Colors.grey }]} />}
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
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

const mapStateToProps = (state) => {
  return {
    favList: state.fav.favList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toogleFav: (params) => dispatch(FavActions.toogleFav(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(BigItem))