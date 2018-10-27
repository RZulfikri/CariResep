import React, { Component } from 'react'
import { View, FlatList} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RiwayatPencarianScreenStyle'
import Header from '../Components/Header'
import RowItem from '../Components/RowItem'

class RiwayatPencarianScreen extends Component {
  constructor(props) {
    super(props)
    this.onPressItem = this.onPressItem.bind(this)
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: <Header title={'Riwayat Pencarian'} position={'right'} navigation={navigation} />
    }
  }

  onPressItem(cari) {
    const params = {
      meta: {
        bahan: cari,
        page: 0
      }
    }

    this.props.navigation.navigate('ListResepScreen', params)
  }

  render() {
    const {riwayat} = this.props
    return (
      <View style={styles.container}>
        <FlatList
          keyboardShouldPersistTaps={'handled'}
          data={riwayat}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            let search = JSON.parse(item.search).join(', ')
            return <RowItem name={search} selected={true} date={item.time} onPress={() => this.onPressItem(JSON.parse(item.search))} />
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    riwayat: state.riwayat.listRiwayat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RiwayatPencarianScreen)
