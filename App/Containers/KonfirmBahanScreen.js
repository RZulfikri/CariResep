import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ResepActions from '../Redux/ResepRedux'

// Styles
import styles from './Styles/KonfirmBahanScreenStyle'
import Header from '../Components/Header';
import RowItem from '../Components/RowItem'
import Button from '../Components/Button'
import { ApplicationStyles } from '../Themes'

class KonfirmBahanScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: props.navigation.state.params.selected
    }
    this.callbackRemove = props.navigation.state.params.callbackRemove
    this.onPressCariResep = this.onPressCariResep.bind(this)
    this.onPressRemoveItem = this.onPressRemoveItem.bind(this)
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: <Header title={'Konfirm bahan'} position={'right'} navigation={navigation} />
    }
  }

  onPressCariResep() {
    const {input} = this.state
    this.props.cariResep({input: JSON.stringify(input)})
    this.props.navigation.popToTop()
  }

  onPressRemoveItem(item) {
    let {input} = this.state
    const index = input.findIndex(data => data === item)
    
    if (index >= 0) {
      input.splice(index, 1)
    }

    this.setState({
      input
    }, () => {
      this.callbackRemove(input)
      if (input.length === 0) {
        this.props.navigation.pop()
      }
    })
  }

  render () {
    const {input} = this.state
    return (
      <View style={styles.mainContainer}>
        <View style={{marginTop: 20, paddingHorizontal: 20, marginBottom: 5}}>
          <Text style={styles.textLabel}>Total Bahan Dipilih : {input.length}</Text>
        </View>
        <FlatList
          data={input}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <RowItem disabled name={item} selected onPress={this.onPressItem} showRemove onRemoveItem={() => this.onPressRemoveItem(item)} />
          }}
        />
        {input.length > 0 && <View style={{ flexDirection: 'row', position: 'absolute', bottom: 20, right: 20 }}>
          <Button onPress={this.onPressCariResep} style={ApplicationStyles.orangeButtonContainer} titleStyle={ApplicationStyles.orangeButtonTitle} title={'Cari Resep'} />
        </View>}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cariResep: (params) => dispatch(ResepActions.cariResepRequest(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KonfirmBahanScreen)
