import React, { PureComponent } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ResepActions from '../Redux/ResepRedux'
import FavActions from '../Redux/FavoritRedux'

// Styles
import styles from './Styles/DetailResepScreenStyle'
import Header from '../Components/Header'
import { Colors, Images } from '../Themes';

class DetailResepScreen extends PureComponent {
  constructor(props) {
    super(props)
    const isFav = props.favList.includes(props.navigation.state.params.id_resep)

    this.state = {
      ...props.navigation.state.params,
      isFav
    }

    this.onPressFav = this.onPressFav.bind(this)
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: <Header title={navigation.state.params.judul} position={'right'} navigation={navigation} />
    }
  }

  componentWillReceiveProps(nextProps) {
    const { resepDetail, favList } = nextProps

    if (resepDetail) {
      if (!resepDetail.fetching) {
        if (resepDetail.payload) {
          if (resepDetail.fetching !== this.props.resepDetail.fetching) {
            this.setState({
              ...this.state,
              ...resepDetail.payload.data
            })
          }
        }

        if (resepDetail.error) {
          // handle error
        }

        // handle loading false
      } else {
        // handle loading true
      }
    }

    const isFav = favList.includes(this.state.id_resep)
    if (isFav !== this.state.isFav) {
      this.setState({ isFav })
    }
  }

  componentWillMount() {
    this.props.detailResep({ id_resep: this.state.id_resep })
  }

  onPressFav() {
    this.props.toogleFav({ id: this.state.id_resep, data: this.state })
  }

  render() {
    const { author, author_photo, description, id_resep, judul, likes, match_count, photo, sumber, tag, bahan, langkah, isFav } = this.state
    return (
      <ScrollView style={[styles.container, { backgroundColor: Colors.white }]} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: photo }}
          style={styles.photoResep}
          resizeMethod={'resize'}
          resizeMode={'cover'}
        />
        <View style={styles.containerMain}>
          <View style={styles.containerTop}>
            <Image
              source={{ uri: author_photo }}
              style={styles.authorPhoto}
              resizeMethod={'resize'}
              resizeMode={'cover'}
            />
            <Text style={styles.textAuthor}>{author}</Text>
            <TouchableOpacity onPress={this.onPressFav} activeOpacity={0.7} style={{ marginLeft: 8, justifyContent: 'center' }}>
              <Image source={isFav ? Images.iconFav : Images.iconFavOutline} style={[{ width: 24.32, height: 30 }, !isFav && { tintColor: Colors.grey }]} />
            </TouchableOpacity>
          </View>
          <View style={styles.border} />
          <View style={styles.containerTitle}>
            <Text style={styles.textJudul}>{judul}</Text>
          </View>
          <View style={styles.border} />
          <View style={styles.containerDescription}>
            <Text style={styles.textReguler}>{description}</Text>
          </View>
          <View style={styles.border} />
          <View style={styles.containerTag}>
            {tag.map((item, index) => {
              return <View key={index} style={styles.tagItems}>
                <Text style={styles.tagTitle}>{item}</Text>
              </View>
            })}
          </View>
          <View style={styles.border} />
          <View style={styles.containerBahan}>
            <Text style={styles.textLabel}>Bahan - bahan:</Text>
            {bahan ? bahan.map((item, index) => {
              return <View key={index}>
                <Text style={styles.textReguler}>{item}</Text>
              </View>
            }) : <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                <ActivityIndicator size={25} color={Colors.green} />
              </View>}
          </View>
          <View style={styles.border} />
          <View style={styles.containerBahan}>
            <Text style={styles.textLabel}>Langkah - langkah:</Text>
            {langkah ? langkah.map((item, index) => {
              return <View key={index}>
                <Text style={styles.textReguler}>{index + 1}. {item.langkah}</Text>
                {item.photos.length > 0 && <ScrollView
                  horizontal
                  style={{ paddingVertical: 10 }}
                  showsHorizontalScrollIndicator={false}
                >
                  {item.photos && item.photos.map((photo, index) => {
                    return <View key={index} style={{ flex: 1, marginHorizontal: 5 }}>
                      <Image style={styles.imageLangkah} source={{ uri: photo }} resizeMethod={'resize'} resizeMode={'cover'} />
                    </View>
                  })}
                </ScrollView>}
              </View>
            }) : <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                <ActivityIndicator size={25} color={Colors.green} />
              </View>}
          </View>
          <View style={styles.border} />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    resepDetail: state.resep.detailResep,
    favList: state.fav.favList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    detailResep: (params) => dispatch(ResepActions.detailResepRequest(params)),
    toogleFav: (params) => dispatch(FavActions.toogleFav(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailResepScreen)
