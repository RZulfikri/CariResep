import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { debounce } from 'throttle-debounce'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import BahanActions from '../Redux/BahanRedux'

// Styles
import styles from './Styles/PilihBahanScreenStyle'
import Header from '../Components/Header';
import SearchBox from '../Components/SearchBox'
import RowItem from '../Components/RowItem'
import Button from '../Components/Button'
import { ApplicationStyles } from '../Themes';

class PilihBahanScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: [],
      listBahan: [],
      loading: false,
      search: ''
    }
    this.onPressKonfirmBahan = this.onPressKonfirmBahan.bind(this)
    this.onPressItem = this.onPressItem.bind(this)
    this.onRefreshList = this.onRefreshList.bind(this)
    this.onLoadMore = this.onLoadMore.bind(this)
    this.onSearch = debounce(300, this.onSearch.bind(this))
    this.callbackRemove = this.callbackRemove.bind(this)

    this.isSearch = false
    this.page = 0
    this.pageSearch = 0
  }

  componentWillMount() {
    if (this.props.bahanGet.fetching === null) {
      this.props.getBahan()
    } else {
      const {payload} = this.props.bahanGet

      if (payload) {
        const {data, meta} = payload
        if (data && meta && meta.page === 0) {
          this.setState({listBahan: data}, () => {
            this.page = payload.meta.page
          })
        } else {
          this.props.getBahan()
        }
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { bahanGet } = nextProps
    let { listBahan, loading } = this.state

    if (bahanGet) {
      if (!bahanGet.fetching) {
        if (bahanGet.payload) {
          if (bahanGet.payload.meta.page === 0) {
            listBahan = [].concat(bahanGet.payload.data)
            this.page = bahanGet.payload.meta.page
          } else {
            listBahan = listBahan.concat(bahanGet.payload.data)
            this.page = bahanGet.payload.meta.page
          }

          // success data
        } else {
          // failure data
        }
        loading = false
      } else {
        // loading
        loading = true
      }
    }

    this.setState({
      listBahan,
      loading
    })
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: <Header title={'Pilih bahan'} position={'right'} navigation={navigation} />
    }
  }

  onPressKonfirmBahan() {
    const { selected } = this.state
    this.props.navigation.navigate('KonfirmBahanScreen', {selected, callbackRemove: this.callbackRemove})
  }

  onPressItem(item) {
    let { selected } = this.state

    if (selected.includes(item)) {
      selectedIndex = selected.findIndex(data => data === item)
      selected.splice(selectedIndex, 1)
    } else {
      selected.push(item)
    }

    this.setState({
      selected
    })
  }

  callbackRemove(items) {
    this.setState({
      selected: items
    })
  }

  onSearch(search) {
    this.setState({ search }, this.onRefreshList)
  }

  onRefreshList() {
    const {search} = this.state
    if (search.length > 0) {
      this.props.getBahan({ search })
    } else {
      this.props.getBahan()
    }
  }

  onLoadMore() {
    const {search} = this.state
    if (search.length > 0) {
      this.props.getBahan({ page: this.page + 1, search })
    } else {
      this.props.getBahan({ page: this.page + 1 })
    }
  }

  render() {
    const { selected, listBahan, loading, search } = this.state
    return (
      <View style={styles.mainContainer}>
        <SearchBox onSearch={this.onSearch} value={search} />
        <FlatList
          keyboardShouldPersistTaps={'handled'}
          data={listBahan}
          keyExtractor={(item, index) => index.toString()}
          extraData={this.state}
          renderItem={({ item }) => {
            isSelected = selected.includes(item)
            return <RowItem name={item} selected={isSelected} onPress={this.onPressItem} />
          }}
          refreshing={loading}
          onRefresh={this.onRefreshList}
          onEndReached={this.onLoadMore}
        />
        {selected.length > 0 && <View style={{ flexDirection: 'row', position: 'absolute', bottom: 20, right: 20 }}>
          <Button onPress={this.onPressKonfirmBahan} style={ApplicationStyles.greenButtonContainer} titleStyle={ApplicationStyles.greenButtonTitle} title={`${selected.length} dipilih`} />
        </View>}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bahanGet: state.bahan.getBahan
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBahan: (params) => dispatch(BahanActions.getBahanRequest(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PilihBahanScreen)
