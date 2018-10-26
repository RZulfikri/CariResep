import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, FlatList, ActivityIndicator, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
import Header from '../Components/Header';
import Button from '../Components/Button'
import RowList from '../Components/RowList'
import { ApplicationStyles, Colors, Images } from '../Themes'

const { width, height } = Dimensions.get('screen')

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultResep: [],
      loading: false
    }

    this.onPressMainButton = this.onPressMainButton.bind(this)
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: <Header position={'left'} title={'Cari Resep'} back={false} showMenu navigation={navigation} />
    }
  }

  componentWillReceiveProps(nextProps) {
    const { resepCari } = nextProps
    let { resultResep, loading } = this.state

    if (resepCari) {
      if (!resepCari.fetching) {
        if (resepCari.payload) {
          resultResep.push(resepCari.payload)
        }

        if (resepCari.error) {
          // error handle
        }

        loading = false
      } else {
        loading = true
      }
    }

    this.setState({
      loading,
      resultResep
    })
  }

  onPressMainButton() {
    this.props.navigation.navigate('PilihBahanScreen')
  }

  render() {
    const { loading, resultResep } = this.state
    return (
      <View style={[styles.container]}>
        {loading && <ActivityIndicator
          color={Colors.green}
          size={30}
          style={{ marginVertical: 10 }}
        />}
        <FlatList
          ref={'flatlist'}
          data={resultResep}
          // extraData={this.state}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingTop: 70, justifyContent: resultResep.length === 0 ? 'center' : 'flex-end' }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <View style={{ flex: 1 }}>
              <RowList data={item} />
            </View>
          }}
          inverted
          ListEmptyComponent={() => <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Image source={Images.imageChef} style={{ width: 200, height: 200, marginBottom: 10 }} resizeMethod={'resize'} resizeMode={'cover'} />
            <Text style={styles.textInfo}>Belum ada resep nih.</Text>
            <Text style={styles.textInfo}>Yuk cari resep sekarang</Text>
          </View>}
          onContentSizeChange={() => this.refs.flatlist.scrollToEnd({ animated: true })}
        />
        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 20, right: 20 }}>
          <Button onPress={this.onPressMainButton} style={ApplicationStyles.orangeButtonContainer} titleStyle={ApplicationStyles.orangeButtonTitle} title={'Pilih Bahan'} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    resepCari: state.resep.cariResep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
