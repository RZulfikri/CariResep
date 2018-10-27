import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import FavActions from '../Redux/FavoritRedux'

// Styles
import styles from './Styles/ArsipResepScreenStyle'
import Header from '../Components/Header'
import { Colors } from '../Themes';
import BigItem from '../Components/BigItem'

class ArsipResepScreen extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: <Header title={'Resep Favorit'} position={'right'} navigation={navigation} />
    }
  }

  render() {
    const {favListItem} = this.props
    return (
      <View style={styles.container}>
        <FlatList
          style={{ backgroundColor: Colors.background, paddingVertical: 5 }}
          contentContainerStyle={{ backgroundColor: Colors.background }}
          data={favListItem}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <BigItem data={item} favItem={true} />
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favListItem: state.fav.fullFavItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toogleFav: (params) => dispatch(FavActions.toogleFav(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArsipResepScreen)
